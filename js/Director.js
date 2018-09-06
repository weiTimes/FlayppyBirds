/*
 * @Author: 叶威 
 * @Date: 2018-09-06 10:06:59 
 * @Last Modified by: 叶威
 * @Last Modified time: 2018-09-06 16:36:08
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

  run() {
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

    let timer = requestAnimationFrame(() => this.run()); // 性能高，根据浏览器的刷新速率
    this.dataStore.put('timer', timer);
    // cancelAnimationFrame(this.dataStore.get('timer'));
  }
}
