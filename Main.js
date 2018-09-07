/*
 * @Author: 叶威 
 * @Date: 2018-09-06 10:07:28 
 * @Last Modified by: 叶威
 * @Last Modified time: 2018-09-07 17:48:49
 * 
 * 初始化整个游戏的精灵，作为整个游戏的入口
 */
import { ResourceLoader } from './js/base/ResourceLoader.js';
import { Director } from './js/Director.js';
import { BackGround } from './js/runtime/BackGround.js';
import { DataStore } from './js/base/DataStore.js';
import { Land } from './js/runtime/Land.js';
import { Birds } from './js/player/Birds.js';
import { StartButton } from './js/player/StartButton.js';
import { Score } from './js/player/Score.js';
import { ApiExamples } from './js/ApiExamples.js';

export class Main {
  constructor() {
    // 初始化画布
    this.canvas = wx.createCanvas();
    this.ctx = this.canvas.getContext('2d');
    this.dataStore = DataStore.getInstance();
    this.director = Director.getInstance();

    const loader = ResourceLoader.create();
    loader.onloaded(map => this.onResourceFirstLoaded(map));

    // Director.getInstance(); // 初始化导演类
  }

  /**
   * 创建背景音乐
   *
   * @memberof Main
   */
  createBackgroundMusic() {
    const bgm = wx.createInnerAudioContext();
    // bgm.obeyMuteSwitch = true; // 在ios静音模式下也可以播放音乐
    bgm.autoplay = true;
    bgm.loop = true;
    bgm.src = 'audios/bgm.mp3';
  }

  /**
   * 图片资源加载完成后的执行函数
   *
   * @param {*} map
   * @memberof Main
   */
  onResourceFirstLoaded(map) {
    // 需长期保留的数据放在类的成员变量中
    this.dataStore.canvas = this.canvas;
    this.dataStore.ctx = this.ctx;
    this.dataStore.res = map; // 图片资源

    const examples = new ApiExamples();
    examples.socketRequest();
    // this.createBackgroundMusic();
    this.init();
  }

  init() {
    this.director.isGameOver = false;

    this.dataStore
      .put('background', BackGround)
      .put('land', Land)
      .put('pencils', [])
      .put('birds', Birds)
      .put('startButton', StartButton)
      .put('score', Score);

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
    wx.onTouchStart(() => {
      if (this.director.isGameOver) {
        this.init();
      } else {
        this.director.birdsEvent();
      }
    });
  }
}
