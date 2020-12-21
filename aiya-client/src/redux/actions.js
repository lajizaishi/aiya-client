/*
* 包含n个action creator
* 异步action
* 同步action
* */
import {AUTH_SUCCESS,ERROR_MSG} from "./action-types";
import {reqRegister,reqLogin} from "../api";

//授权成功的同步action
const authSuccess = (user) => ({type:AUTH_SUCCESS,data:user})
//错误提示信息的同步action
const errorMsg = (msg) => ({type:ERROR_MSG,data:msg})

//注册异步action
export const register = (user) => {
    return async dispatch =>{
        const {username, password, password2, type} = user
        // 做表单的前台检查，如果不通过，返回一个errorMsg的同步action
        if(!user){
            return errorMsg('用户名必须指定')
        }else if (password !== password2){
            return errorMsg('两次密码要一致')
        }
        // 表单数据合法，返回一个发ajax的一部action
        return async dispath => {
            const response = await reqRegister({username,password,type})
            const result = response.data
            if (result.code === 0){//成功
                //分发授权成功的同步action
                dispatch(authSuccess(result.data))
            }else {//失败
                //分发错误提示信息的同步action
                dispatch(errorMsg(result.msg))
            }
        }
    }
}
//登录异步action
export const login = (user) => {
    const {username, password, type} = user
    if (!username){
        return errorMsg('用户名必须指定！')
    }else if (!password){
        return errorMsg('密码必须指定')
    }
    return async dispatch =>{
        const response = await reqLogin(user)
        const result = response.data
        if (result.code === 0){//成功
            //分发授权成功的同步action
            dispatch(authSuccess(result.data))
        }else {//失败
            //分发错误提示信息的同步action
            dispatch(errorMsg(result.msg))
        }
    }
}
