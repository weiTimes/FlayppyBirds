/*
 * @Author: 叶威 
 * @Date: 2018-09-06 10:05:18 
 * @Last Modified by: 叶威
 * @Last Modified time: 2018-09-06 15:43:57
 * 
 * 上半部分的铅笔
 */
import { Pencil } from './Pencil.js';
import { Sprite } from '../base/Sprite.js';

export class UpPencil extends Pencil {
  constructor(top) {
    const image = Sprite.getImage('pencilUp');

    super(image, top);
  }

  draw() {
    this.y = this.top - this.height;
    super.draw();
  }
}
