# FTP 客户端

基于 [Web Ftp Client](https://github.com/sunilmore690/web-ftp-client) 二次开发的 Ftp Web 客户端。

用户可在浏览器中访问该网页，连接远程 FTP 服务器，浏览文件并执行几乎所有的文件操作。

## 功能

- 新建、删除、重命名、下载、上传、复制、剪切 等文件操作
- 新建、删除、重命名 等目录操作

## 依赖

该项目使用了一些开源项目才能正常工作：

- [node.js] - 后端的事件 I/O
- [Express] - 快速的 node.js 网络应用框架
- [Backbonejs] - 前端 MVC 框架
- [Handlebars] - 很棒的模板引擎
- [Twitter Bootstrap] - 适用于现代 Web 应用程序的出色 UI 样板
- [jQuery] - 一个轻量级、“少写，多做”的 JavaScript 库
- [jsftp] - node.js 的健全 FTP 客户端实现

## 部署网址

[FTP 客户端](https://cloud.qiyandata.com:6443/ftp/)

## github

[ftp-web-client](https://github.com/liuqi6908/ftp-web-client/)

## 下载运行

该项目需要 [Node.js](https://nodejs.org/) v4+ 才能运行。

```plaintext
git clone https://github.com/liuqi6908/ftp-web-client.git
cd ftp-web-client
npm install
npm start 或 node index.js
```

## 修改内容
与原来的项目相比，修改了一些bug ，也增加了自动适应上传库的问题
1、把依赖加进来
2、修改了源码的依赖，引入patch-package
3、新增了get接口用来接收登录
4、修改post登录接口的返回
5、修改一下跨域来源
6、支持跨域，支持返回cookies
7、前端增加ip显示
8、修改跳到外域清空存储
9、重构了上传逻辑，对于大文件不会长时间等待
10、创建上传进度条+修改下载进度条（下载原始方法没有动）
11、新增流式下载功能
12、修复上下滑动导致右键菜单移位问题

 


