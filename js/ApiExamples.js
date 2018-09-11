export class ApiExamples {
  downloadImage() {
    wx.downloadFile({
      url: 'http://t2.hddhhn.com/uploads/tu/201610/198/scx30045vxd.jpg',
      success: temp => {
        console.log(JSON.stringify(temp));
      }
    });
  }
  socketRequest() {
    wx.connectSocket({
      url: 'ws://127.0.0.1:8282/',
      success: () => {
        console.log('客户端连接成功');
      }
    });

    wx.onSocketOpen(() => {
      wx.sendSocketMessage({
        data: '这个是来自客户端的实时消息'
      });

      wx.onSocketMessage(message => {
        console.log(message);
      });
    });
  }

  httpRequest() {
    wx.request({
      url: 'http://127.0.0.1:8181/',
      //   url: 'https://www.baidu.com',
      method: 'POST',
      data: 'mydata',
      success: response => {
        //   这里可以根据副武器的指示做相应的动作 弹出广告、播放音乐等
        console.log(response);
      }
    });
  }

  getUserinfo() {
    // 由于微信开发者工具暂不支持最新库，需要真机上测试
    let button = wx.createUserInfoButton({
      type: 'text',
      text: '获取用户信息',
      style: {
        left: 10,
        top: 76,
        width: 200,
        height: 40,
        lineHeight: 40,
        backgroundColor: '#ff0000',
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 4
      }
    });
    button.onTap(res => {
      console.log(res);
    });
  }
}
