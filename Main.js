/*
 * @Author: 叶威 
 * @Date: 2018-09-06 10:07:28 
 * @Last Modified by: 叶威
 * @Last Modified time: 2018-09-07 11:53:58
 * 
 * 初始化整个游戏的精灵，作为整个游戏的入口
 */
import { ResourceLoader } from './js/base/ResourceLoader.js';
import { Director } from './js/Director.js';
import { BackGround } from './js/runtime/BackGround.js';
import { DataStore } from './js/base/DataStore.js';
import { Land } from './js/runtime/Land.js';
import { UpPencil } from './js/runtime/UpPencil.js';
import { DownPencil } from './js/runtime/DownPencil.js';
import { Birds } from './js/player/Birds.js';
import { StartButton } from './js/player/StartButton.js';

export class Main {
  constructor() {
    // 初始化画布
    this.canvas = document.getElementById('game_canvas');
    this.ctx = this.canvas.getContext('2d');
    this.dataStore = DataStore.getInstance();
    this.director = Director.getInstance();

    const loader = ResourceLoader.create();
    loader.onloaded(map => this.onResourceFirstLoaded(map));

    // Director.getInstance(); // 初始化导演类
  }

  /**
   * 图片资源加载完成后的执行函数
   *
   * @param {*} map
   * @memberof Main
   */
  onResourceFirstLoaded(map) {
    // 需长期保留的数据放在类的成员变量中
    this.dataStore.ctx = this.ctx;
    this.dataStore.res = map; // 图片资源

    this.init();
  }

  init() {
    this.director.isGameOver = false;

    this.dataStore
      .put('background', BackGround)
      .put('land', Land)
      .put('pencils', [])
      .put('birds', Birds)
      .put('startButton', StartButton);

    this.registerEvent();

    this.director.createPencil(); // 创建一组铅笔
    this.director.run();
  }

  /**
   * 注册事件
   *
   * @memberof Main
   */
  registerEvent() {
    this.canvas.addEventListener('touchstart', e => {
      e.preventDefault();

      if (this.director.isGameOver) {
        this.init();
      } else {
        this.director.birdsEvent();
      }
    });
  }
}
