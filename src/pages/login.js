import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from "@style/login.scss"
//服务api
import { loginAPI } from "@API/api.js"

class Login extends Component {
    constructor(props) {
      super(props)
    }

    //登录
    login = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) { //校验通过
              let { username, password } = values
              let params = {
                username,
                password
              }

              loginAPI(params).then(res => {
                if(res.code == 200) {
                  //作为登录之后的标记
                  localStorage.setItem('login_token', res.data)
                  //路由跳转
                  this.props.history.push({
                    pathname: '/home'
                  })
                }
              })
          }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        
        return (
            <div className={styles["login-box"]}>    
               <Form onSubmit={ this.login } className={styles["login-form"]}>
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="用户名"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="密码"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(<Checkbox className={styles["login-form-remeber"]}>记住我</Checkbox>)}
                  <a className={styles["login-form-forgot"]} href="">
                    忘记密码
                  </a>
                  <Button type="primary" htmlType="submit" className={styles["login-form-button"]}>
                    登录
                  </Button>
                  <a style={{ color: 'rgb(255,255,255)' }} href="">立即注册!</a>
                </Form.Item>
              </Form>
            </div>
        );
    }
}

export default Form.create()(Login)