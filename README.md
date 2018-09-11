# 小鸟飞

![Flappybird](https://ws1.sinaimg.cn/large/0069RVTdgy1fv5f71u365g30840eeu0y.gif)

## 搭建框架
## 使用到的设计模式
* 工厂模式
* 单例模式
## 从h5游戏迁移到微信
* 删除index.html, 使用wx.createCanvas()
* 使用wx.createImage()替换new Image()
* 使用wx.onTouchStart()替换addEventListener