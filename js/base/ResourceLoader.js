/*
 * @Author: 叶威 
 * @Date: 2018-09-06 09:57:38 
 * @Last Modified by: 叶威
 * @Last Modified time: 2018-09-06 10:30:38
 * 
 * 资源加载器
 * 确保canvas在图片资源加载完成后渲染
 */
import { Resources } from './Resources.js';

export class ResourceLoader {
  /**
   * 工厂模式
   * 使用的时候不需要再实例化了
   *
   * @static
   * @memberof ResourceLoader
   */
  static create() {
    return new ResourceLoader();
  }

  constructor() {
    this.map = new Map(Resources);

    for (let [key, value] of this.map) {
      const image = wx.createImage();
      image.src = value;

      this.map.set(key, image);
    }
  }

  onloaded(callback) {
    let loadedCount = 0;

    for (let value of this.map.values()) {
      value.onload = () => {
        loadedCount++;

        if (loadedCount >= this.map.size) {
          callback(this.map);
        }
      };
    }
  }
}
