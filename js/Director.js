/*
 * @Author: 叶威 
 * @Date: 2018-09-06 10:06:59 
 * @Last Modified by: 叶威
 * @Last Modified time: 2018-09-07 11:51:15
 * 
 * 导演类
 * 控制游戏的逻辑
 * 单例模式 - 只有会生成一个导演
 */
import { DataStore } from './base/DataStore.js';
import { UpPencil } from './runtime/UpPencil.js';
import { DownPencil } from './runtime/DownPencil.js';

export class Director {
  static getInstance() {
    if (!Director.instance) {
      Director.instance = new Director();
    }
    return Director.instance;
  }

  constructor() {
    this.dataStore = DataStore.getInstance();
    this.moveSpeed = 2;
  }

  createPencil() {
    const minTop = window.innerHeight / 8;
    const maxTop = window.innerHeight / 2;
    const top = minTop + Math.random() * (maxTop - minTop);

    this.dataStore.get('pencils').push(new UpPencil(top));
    this.dataStore.get('pencils').push(new DownPencil(top));
  }

  /**
   * 点击屏幕，停止小鸟的自由落体
   *
   * @memberof Director
   */
  birdsEvent() {
    for (let i = 0; i <= 2; i++) {
      this.dataStore.get('birds').y[i] = this.dataStore.get('birds').birdYs[i];
    }
    this.dataStore.get('birds').time = 0;
  }

  /**
   * 判断小鸟是否撞击铅笔
   *
   * @memberof Director
   */
  static isTrike(bird, pencil) {
    let flag = false;

    if (
      bird.top > pencil.bottom || // 上半部分
      bird.bottom < pencil.top || // 下半部分
      bird.right < pencil.left ||
      bird.left > pencil.right
    ) {
      // 在安全区域内
      flag = true;
    }

    return !flag;
  }

  /**
   * 判断小鸟是否撞击地板和铅笔
   *
   * @memberof Director
   */
  check() {
    const birds = this.dataStore.get('birds');
    const land = this.dataStore.get('land');
    const pencils = this.dataStore.get('pencils');
    // 地板的撞击判断

    if (birds.y[0] + birds.birdsHeight[0] >= land.y) {
      // 撞击到陆地
      this.isGameOver = true;
      return;
    }

    // 小鸟的边框模型
    const birdsBorder = {
      top: birds.y[0],
      bottom: birds.birdYs[0] + birds.birdsHeight[0],
      left: birds.birdXs[0],
      right: birds.birdXs[0] + birds.birdsWidth[0]
    };
    const length = pencils.length;
    for (let i = 0; i < length; i++) {
      const pencil = pencils[i];
      // 铅笔的边框模型
      const pencilBorder = {
        top: pencil.y,
        bottom: pencil.y + pencil.height,
        left: pencil.x,
        right: pencil.x + pencil.width
      };

      if (Director.isTrike(birdsBorder, pencilBorder)) {
        this.isGameOver = true;
        return;
      }
    }
  }

  run() {
    this.check();

    if (!this.isGameOver) {
      this.dataStore.get('background').draw();

      const pencils = this.dataStore.get('pencils');
      if (pencils[0].x + pencils[0].width <= 0 && pencils.length === 4) {
        // 第一组铅笔右侧正好在超出左侧屏幕，将第一组推出数组
        pencils.shift();
        pencils.shift();
      }
      if (
        pencils[0].x <= (window.innerWidth - pencils[0].width) / 2 &&
        pencils.length === 2
      ) {
        // 创建一组铅笔
        this.createPencil();
      }
      this.dataStore.get('pencils').forEach(value => {
        value.draw();
      });

      this.dataStore.get('land').draw();
      this.dataStore.get('birds').draw();

      let timer = requestAnimationFrame(() => this.run()); // 性能高，根据浏览器的刷新速率
      this.dataStore.put('timer', timer);
    } else {
      this.dataStore.get('startButton').draw();
      cancelAnimationFrame(this.dataStore.get('timer'));
      this.dataStore.destory();
    }
  }
}
