//路由部分
import React, { Component } from 'react'
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
//引入路由配置
import routerConfig from "./router.config"
//引入导航守卫的高阶组件
import RouterBeforeEach from "./routerBeforeEach"

export default class RouteConfig extends Component {
    constructor(props) {
        super(props)
    }

    render() { 
        return ( 
            <div>
                <Router>
                    <Switch>
                        {/* 导航守卫的处理 */}
                        <RouterBeforeEach config={ routerConfig } />
                    </Switch>
                </Router>
            </div>
        )
    }
}