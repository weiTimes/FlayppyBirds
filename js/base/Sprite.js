/*
 * @Author: 叶威 
 * @Date: 2018-09-06 10:00:29 
 * @Last Modified by: 叶威
 * @Last Modified time: 2018-09-06 10:01:17
 * 
 * 精灵的基类
 * 负责初始化精灵加载的资源、大小、位置
 */
import { DataStore } from './DataStore.js';

export class Sprite {
  static getImage(key) {
    return DataStore.getInstance().res.get(key);
  }

  /**
   *Creates an instance of Sprite.
   * @param {*} [ctx=null]
   * @param {*} [img=null] 传入image对象
   * @param {number} [srcX=0] 要剪裁的起始x坐标
   * @param {number} [srcY=0] 要剪裁的起始y坐标
   * @param {number} [srcW=0] 剪裁的宽度
   * @param {number} [srcH=0] 剪裁的高度
   * @param {number} [x=0] 放置在画布的x坐标
   * @param {number} [y=0] 放置在画布的y坐标
   * @param {number} [width=0] 图形资源要显示的宽度
   * @param {number} [height=0] 图形资源要显示的高度
   * @memberof Sprite
   */
  constructor(
    img = null,
    srcX = 0,
    srcY = 0,
    srcW = 0,
    srcH = 0,
    x = 0,
    y = 0,
    width = 0,
    height = 0
  ) {
    this.dataStore = DataStore.getInstance();

    this.ctx = this.dataStore.ctx;
    this.img = img;
    this.srcX = srcX;
    this.srcY = srcY;
    this.srcW = srcW;
    this.srcH = srcH;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  /**
   * 这里传入参数便于重写这个方法
   * 如果不传，则是构造函数默认初始化得
   *
   * @param {*} [img=this.img]
   * @param {*} [srcX=this.srcX]
   * @param {*} [srcY=this.srcY]
   * @param {*} [srcW=this.srcW]
   * @param {*} [srcH=this.srcH]
   * @param {*} [x=this.x]
   * @param {*} [y=this.y]
   * @param {*} [width=this.width]
   * @param {*} [height=this.height]
   * @memberof Sprite
   */
  draw(
    img = this.img,
    srcX = this.srcX,
    srcY = this.srcY,
    srcW = this.srcW,
    srcH = this.srcH,
    x = this.x,
    y = this.y,
    width = this.width,
    height = this.height
  ) {
    this.ctx.drawImage(img, srcX, srcY, srcW, srcH, x, y, width, height);
  }
}
