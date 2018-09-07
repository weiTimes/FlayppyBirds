/*
 * @Author: 叶威 
 * @Date: 2018-09-06 10:05:43 
 * @Last Modified by: 叶威
 * @Last Modified time: 2018-09-06 15:49:43
 * 
 * 下半部分的铅笔
 */
import { Sprite } from '../base/Sprite.js';
import { Pencil } from './Pencil.js';
import { DataStore } from '../base/DataStore.js';

export class DownPencil extends Pencil {
  constructor(top) {
    const image = Sprite.getImage('pencilDown');

    super(image, top);
  }

  draw() {
    let gap = DataStore.getInstance().canvas.height / 5;
    this.y = this.top + gap;
    super.draw();
  }
}
