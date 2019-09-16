import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
//获取路由信息,使用withRouter对组件进行包裹
import { withRouter } from 'react-router-dom';
//其他路由组件
import asyncImportComponent from "@until/asyncImportComponent"
const Home = asyncImportComponent(() => import(/* webpackChunkName: "Home" */"./pages/home")) 

//装饰器模式
@withRouter
class App extends Component {
    constructor(props) {
        console.log("constructor")
        super(props)
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    render() {console.log(this.props)
        return (
            <div>
                <header>头部</header>
                <div className="content">
                    {/* 模拟默认路由 */}
                    <Redirect path="/" to={{pathname: '/home'}} />
                    <Route exact path="/home" component={Home} />
                    {/* <Route path="inbox" component={Inbox}>
                        <Route path="messages/:id" component={Message} />
                    </Route> */}
                </div>
                <footer>底部</footer>
            </div>
        )
    }
}

// export default withRouter(App)
export default App