/*
 * @Author: 叶威 
 * @Date: 2018-09-06 10:04:26 
 * @Last Modified by: 叶威
 * @Last Modified time: 2018-09-06 15:33:02
 * 
 * 陆地类
 */
import { Sprite } from '../base/Sprite.js';
import { Director } from '../Director.js';
import { DataStore } from '../base/DataStore.js';

export class Land extends Sprite {
  constructor() {
    const image = Sprite.getImage('land');

    super(
      image,
      0,
      0,
      image.width,
      image.height,
      0,
      DataStore.getInstance().canvas.height - image.height,
      image.width,
      image.height
    );

    this.landX = 0; // 地板的水平变化坐标
    this.landSpeed = Director.getInstance().moveSpeed; // 地板的移动速度
  }

  draw() {
    this.landX = this.landX + this.landSpeed;
    if (this.landX > this.img.width - DataStore.getInstance().canvas.width) {
      this.landX = 0;
    }

    super.draw(
      this.img,
      this.srcX,
      this.srcY,
      this.srcW,
      this.srcH,
      -this.landX,
      this.y,
      this.width,
      this.height
    );
  }
}
