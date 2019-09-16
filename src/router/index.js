//路由部分
import React, { Component } from 'react'
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
//引入异步加载组件
import asyncImportComponent from "@until/asyncImportComponent"
//异步组件
const App = asyncImportComponent(() => import(/* webpackChunkName: "App" */"../app"));  
const Login = asyncImportComponent(() => import(/* webpackChunkName: "Login" */"../pages/login"));  


export default class RouteConfig extends Component {
    constructor(props) {
        super(props)
    }

    render() { 
        return ( 
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route path="/" component={App} />
                    </Switch>
                </Router>
            </div>
        )
    }
}