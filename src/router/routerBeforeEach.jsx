//路由前置守卫高阶组件
import React, { Component } from 'react'
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
//引入store
import Store from "../redux"

export default class RouterBeforeEach extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: "/",
            loginFlag: Store.getState().loginFlag
        }
        //监听state的变化
        Store.subscribe(this.listenLoginFlag)
       
    }

    //监听store的变化
    listenLoginFlag = () => { console.log(Store.getState().loginFlag)
        this.setState({
            loginFlag: Store.getState().loginFlag
        })
    }   

    componentDidMount() {
        //存放当前的路由信息
        this.setState({
            location: this.props.location
        })  
    }

    render() { 
        const { location,config } = this.props;
        const { pathname } = location;
        //登录的标记
        const isLogin = this.state.loginFlag

        // 如果该路由不用进行权限校验，登录状态下登陆页除外
        // 因为登陆后，无法跳转到登陆页
        // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
        const targetRouterConfig = config.find( _ => _.path === pathname);
        if(targetRouterConfig && !targetRouterConfig.auth && !isLogin){
            const { component } = targetRouterConfig;
            return <Route exact path={pathname} component={component} />
        }

        if(isLogin){
            // 如果是登陆状态，想要跳转到登陆，重定向到主页
            if(pathname === '/login'){
                return <Redirect to='/' />
            }else{
                // 如果路由合法，就跳转到相应的路由
                if(targetRouterConfig){
                    return <Route path={pathname} component={targetRouterConfig.component} />
                }else{
                    // 如果路由不合法，重定向到 404 页面
                    return <Redirect to='/404' />
                }
            }
        }else{
            // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
            if(targetRouterConfig && targetRouterConfig.auth){
                return <Redirect to='/login' />
            }else{
                // 非登陆状态下，路由不合法时，重定向至 404
                return <Redirect to='/404' />
            }
        }
    }

    //组件销毁
    componentWillUnmount() {
        //销毁监听
        Store.unsubscribe(this.listenLoginFlag)
    }
}
