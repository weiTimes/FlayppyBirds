(function() {
  'use strict';

  var WebSocketServer = require('ws').Server; // websockt 服务
  var ws = new WebSocketServer({
    port: 8282
  });

  // 连接成功
  ws.on('connection', ws => {
    console.log('已经连接了');
    // 接收到微信小游戏发送的请求
    ws.on('message', message => {
      ws.send('服务器发给客户端的数据'); // 可在任何位置使用
      console.log(message);
    });
  });
})();
