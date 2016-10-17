# cd-it-job-api
针对成都IT小伙伴们的工作（招聘，求职）交流的微信订阅号项目（后端API）。

# How to develop

```bash
# 初始化依赖
$ npm i

# 运行开发环境
$ npm start
# or
$ npm run dev
```

# Folder structure

```
src/
  bizs/  -- 存放业务逻辑的目录
  common/  --公共函数库目录
  models/  --Mongodb 模型放置目录
  routes/  --用于存放路由文件的目录
  config.js  --配置项文件
  index.js  --默认入口文件
  server.js  --cluster mode 入口文件
```
