/*
 * @Author: 叶威 
 * @Date: 2018-09-06 10:06:59 
 * @Last Modified by:   叶威 
 * @Last Modified time: 2018-09-06 10:06:59 
 * 
 * 导演类
 * 控制游戏的逻辑
 * 单例模式 - 只有会生成一个导演
 */
import { DataStore } from './base/DataStore.js';

export class Director {
  static getInstance() {
    if (!Director.instance) {
      Director.instance = new Director();
    }
    return Director.instance;
  }

  constructor() {
    this.dataStore = DataStore.getInstance();
  }

  run() {
    const backgroundSprite = this.dataStore.get('background');
    backgroundSprite.draw();
  }
}
