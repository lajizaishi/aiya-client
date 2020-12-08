/*
* 登录路由组件
* */
import React,{Component} from 'react'
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Button} from 'antd-mobile'

import Logo from "../../components/logo/logo";

const ListItem = List.Item
export default class Register extends Component{
    state = {
        username:'',//用户名
        password:'',//密码
    }
    login = () => {
        console.log(this.state)
    }
    handleChange = (name,v) => {
        this.setState({
            [name]:v
        })
    }
    goRegister = () =>{
        this.props.history.replace('/register')
    }
    render() {
        return(
            <div>
                <NavBar>哎呀招聘</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem placeholder="请输入用户名" onChange={(v) =>{this.handleChange('username',v)}}>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" placeholder="请输入密码" onChange={(v) =>{this.handleChange('password',v)}}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
                        <WhiteSpace/>
                        <Button type={"primary"} onClick={this.login}>登&nbsp;&nbsp;录</Button>
                        <WhiteSpace/>
                        <Button onClick={this.goRegister}>还没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
