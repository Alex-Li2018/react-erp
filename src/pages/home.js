import React, { Component } from 'react'
import { Table, Divider, Tag } from 'antd';
//引入context的媒介
import UserContext from "../context"
import TableWrap from "./table"

export default class Home extends Component {
    static contextType = UserContext

    constructor(props,context) {
        super(props)
        console.log(context)
        this.boxRef = React.createRef();
    }

    showRefs = () => {
        //获取到的是组件转发下的ref
        console.log(this.boxRef.current)
    }

    render() {
        return (
            <div>
                <div>首页</div>
                <div>用户信息:</div>
                <div onClick={this.showRefs}>{JSON.stringify(this.context)}</div>
                <TableWrap boxRef={this.boxRef} />
            </div>
        )
    }
}