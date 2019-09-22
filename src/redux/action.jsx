//导入类型
import { USERINFO, LOGINFLAG } from './action_type'

//定义动作类
export const userInfoAction = (value) => ({
    type: USERINFO,
    value
})

export const loginFLagAction = (value) => ({
    type: LOGINFLAG,
    value
})