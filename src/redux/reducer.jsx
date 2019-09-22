//链接函数
//引入action
import { USERINFO, LOGINFLAG } from './action_type'
//引入state
import initState from "./state"

export default (state = initState,action) => {
    let { type, value } = action

    switch(type) {
        case USERINFO:
            //返回新的state
            return Object.assign({}, state, { userInfo: value })
        break;
        case LOGINFLAG:
            return Object.assign({}, state, { loginFlag: value })
            return
        break;
        default: 
            return state;
    }
}