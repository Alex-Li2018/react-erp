//利用import的方式来异步加载组件
import React, { Component } from 'react'

export default function asyncImportComponent (importComponent) {
    class asyncComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                components: null
            }
        }
    
        async componentWillMount() {
            let res = await importComponent()
            this.setState({
                components: res.default 
            })
        }
    
        render() {
            let { components: Com } = this.state
            // 返回组件
            return (Com ? <Com {...this.props} /> : null)
        }
    }

    return asyncComponent
}