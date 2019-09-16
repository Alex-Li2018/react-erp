import React, { Component } from 'react'
//服务api
import { loginAPI } from "@API/api.js"

export default class Login extends Component {
    constructor(props) {
        super(props)
    }

    async login() {
        let params = {
            user: 123,
            password: 123456
        }
        let res = await loginAPI(params)
        console.log("登录页",res)
    }

    render() {
        return (
            <div onClick={this.login.bind(this)}>登录页</div>
        )
    }
}