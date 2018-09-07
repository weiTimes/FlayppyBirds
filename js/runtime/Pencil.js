/*
 * @Author: 叶威 
 * @Date: 2018-09-06 15:23:36 
 * @Last Modified by: 叶威
 * @Last Modified time: 2018-09-06 16:10:44
 * 
 * 铅笔基类
 */
import { Sprite } from '../base/Sprite.js';
import { DataStore } from '../base/DataStore.js';

export class Pencil extends Sprite {
  constructor(image, top) {
    super(
      image,
      0,
      0,
      image.width,
      image.height,
      DataStore.getInstance().canvas.width,
      0,
      image.width,
      image.height
    );
    this.top = top;

    this.moveSpeed = 2;
  }

  draw() {
    this.x = this.x - this.moveSpeed;

    super.draw(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      this.x,
      this.y,
      this.img.width,
      this.img.height
    );
  }
}
