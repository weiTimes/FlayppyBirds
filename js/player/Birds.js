/*
 * @Author: 叶威 
 * @Date: 2018-09-06 10:01:36 
 * @Last Modified by: 叶威
 * @Last Modified time: 2018-09-07 10:48:15
 * 
 * 小鸟类
 * 循环渲染小鸟图片的三个部分
 */
import { Sprite } from '../base/Sprite.js';
import { DataStore } from '../base/DataStore.js';

export class Birds extends Sprite {
  constructor() {
    const image = Sprite.getImage('birds');

    super(
      image,
      0,
      0,
      image.width,
      image.height,
      0,
      0,
      image.width,
      image.height
    );

    this.clippingX = [9, 9 + 34 + 18, 9 + 34 + 18 + 34 + 18];
    this.clippingY = [10, 10, 10];
    this.clippingWidth = [34, 34, 34];
    this.clippingHeight = [24, 24, 24];
    const birdX = DataStore.getInstance().canvas.width / 4;
    this.birdXs = [birdX, birdX, birdX];
    const birdY = DataStore.getInstance().canvas.height / 2;
    this.birdYs = [birdY, birdY, birdY];
    const birdWidth = 34;
    this.birdsWidth = [birdWidth, birdWidth, birdWidth];
    const birdHeight = 24;
    this.birdsHeight = [birdHeight, birdHeight, birdHeight];
    this.y = [birdY, birdY, birdY];
    this.index = 0; // 绘制具体形态的索引(0,1,2)
    this.count = 0;
    this.time = 0; // 时间
  }

  draw() {
    const speed = 0.2; // 切换小鸟的速度(1个场景的切换)
    this.count = this.count + speed;

    if (this.index >= 2) {
      this.count = 0;
    }
    // 减速器(向下取整)
    this.index = Math.floor(this.count);

    // 小鸟的位移
    const g = 0.98 / 2.4; // 重力加速度
    const offsetTop = 5; // 向上的偏移量
    const offsetY = (g * this.time * this.time - offsetTop) / 2;
    this.time += 0.2;

    for (let i = 0; i <= 2; i++) {
      this.birdYs[i] = this.birdYs[i] + offsetY;
      this.y[i] = this.birdYs[i];
    }

    super.draw(
      this.img,
      this.clippingX[this.index],
      this.clippingY[this.index],
      this.clippingWidth[this.index],
      this.clippingHeight[this.index],
      this.birdXs[this.index],
      this.birdYs[this.index],
      this.birdsWidth[this.index],
      this.birdsHeight[this.index]
    );
  }
}
