import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
//获取路由信息,使用withRouter对组件进行包裹
import { withRouter } from 'react-router-dom';
//路由组件
import RouteConfig from "./router/index" 
//store
// import Store from "./redux"
// import { Provider } from 'react-redux'

//装饰器模式
// @withRouter
class App extends Component {
    constructor(props) {
        // console.log("constructor")
        super(props)
    }

    // componentWillMount() {
    //     console.log("componentWillMount")
    // }

    componentDidMount() {
        // console.log("componentDidMount",this.refs.RouteConfig)
    }

    render() {
        // const { pathname } = this.props.location
        // console.log(pathname)
        return (
            <div>
                {/* {pathname !== '/login' && <header>头部</header>} */}
                <div className="content">
                    {/* <Provider Store={Store}> */}
                        <RouteConfig ref="RouteConfig" />
                    {/* </Provider> */}
                </div>
                {/* <footer>底部</footer> */}
            </div>
        )
    }
}

// export default withRouter(App)
export default App