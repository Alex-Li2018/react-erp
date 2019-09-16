## 技术栈

react + react-router-dom + webpack + ES6/7 + axios + sass + flex + svg

# 项目布局

```
.
├── build                                       // webpack配置文件
├── mock                                        // mock数据
├── docs                                        // react学习思维导图
├── client                                      // 打包模板
├── src                                         // 源码目录
│   ├── api                                     // 服务
│   │   └── api.js                              // 页面所有的api
│   ├── config                                  // 基本配置
│   │   ├── http.js                             // axios的封装
│   │   └── pubsub.js                           // 发布订阅模式
│   ├── pages                                   // 页面组件
│   │   ├── home.js                             // 首页
│   │   └── login.js                            // 首页
│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── until                                   // 公共的方法与组件
│   │   └── asyncImportComponent.jsx            // 路由懒加载的组件
│   ├── App.js                                  // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
.

56 directories, 203 files
```