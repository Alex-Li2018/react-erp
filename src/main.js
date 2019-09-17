import React from 'react'
import ReactDOM from 'react-dom'
import $Http from "./config/http"
import $bus from "./config/pubsub"
//导入路由
import App from "./app"

//将bus与http挂载到window对象上
window.$Http = $Http;
window.$bus = $bus;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);