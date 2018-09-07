/*
 * @Author: 叶威 
 * @Date: 2018-09-07 17:16:05 
 * @Last Modified by: 叶威
 * @Last Modified time: 2018-09-07 17:36:34
 * 
 * node
 * 模拟服务器，接收前端小游戏的HTTP网络请求
 */
var http = require('http');
(function() {
  'use strict';

  // request => 客户端传递的参数, response => 服务器返回的数据
  http
    .createServer((request, response) => {
      let body = '';
      // 每次获取数据的回调
      request.on('data', chunk => {
        body += chunk;
      });

      request.on('end', () => {
        response.end('这是服务器返回的数据~~~');
        console.log(body);
      });
    })
    .listen(8181);
})();
