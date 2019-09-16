import React from 'react'
import ReactDOM from 'react-dom'
import $Http from "./config/http"
import $bus from "./config/pubsub"
//导入路由
import RouteConfig from "./router/index"

//将bus与http挂载到window对象上
window.$Http = $Http;
window.$bus = $bus;

ReactDOM.render(
    <RouteConfig />,
    document.getElementById('root')
);