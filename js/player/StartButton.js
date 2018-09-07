/*
 * @Author: 叶威 
 * @Date: 2018-09-06 10:02:37 
 * @Last Modified by: 叶威
 * @Last Modified time: 2018-09-07 11:54:00
 * 
 * 开始按钮类
 */
import { Sprite } from '../base/Sprite.js';
import { DataStore } from '../base/DataStore.js';

export class StartButton extends Sprite {
  constructor() {
    const image = Sprite.getImage('startButton');
    super(
      image,
      0,
      0,
      image.width,
      image.height,
      (DataStore.getInstance().canvas.width - image.width) / 2,
      (DataStore.getInstance().canvas.height - image.height) / 2.5,
      image.width,
      image.height
    );
  }
}
