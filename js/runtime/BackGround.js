/*
 * @Author: 叶威 
 * @Date: 2018-09-06 10:06:12 
 * @Last Modified by: 叶威
 * @Last Modified time: 2018-09-06 10:16:00
 * 
 * 背景
 */
import { Sprite } from '../base/Sprite.js';
import { DataStore } from '../base/DataStore.js';

export class BackGround extends Sprite {
  constructor() {
    const image = Sprite.getImage('background'); // Sprite || BackGround

    super(
      image,
      0,
      0,
      image.width,
      image.height,
      0,
      0,
      DataStore.getInstance().canvas.width,
      DataStore.getInstance().canvas.height
    );
  }
}
