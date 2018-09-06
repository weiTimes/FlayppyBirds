/*
 * @Author: 叶威 
 * @Date: 2018-09-06 15:23:36 
 * @Last Modified by: 叶威
 * @Last Modified time: 2018-09-06 16:10:44
 * 
 * 铅笔基类
 */
import { Sprite } from '../base/Sprite.js';
import { Director } from '../Director.js';

export class Pencil extends Sprite {
  constructor(image, top) {
    super(
      image,
      0,
      0,
      image.width,
      image.height,
      window.innerWidth,
      0,
      image.width,
      image.height
    );
    this.top = top;
  }

  draw() {
    this.x = this.x - Director.getInstance().moveSpeed;

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
