/*
*包含n个reducer函数：根据老的state和指定的action返回一个新的state
* */
import {combineReducers} from 'redux'

const initUser = {
    username:'',//用户名
    type:'',//用户类型niuren/laoban
    msg:''//错误提示信息
}
//产生user状态的reducer
function user(state=initUser,action) {
    switch (action.type) {
        default:
            return state
    }
}

// 返回合并后的 reducer 函数
export default combineReducers({user})
