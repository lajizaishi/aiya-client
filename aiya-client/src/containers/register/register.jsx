// /*
// * 注册路由组件
// * */
import React,{Component} from 'react'
import {NavBar,WingBlank,List,InputItem,WhiteSpace,Radio,Button} from 'antd-mobile'


import Logo from "../../components/logo/logo";

const ListItem = List.Item
export default class Register extends Component{
    state = {
        username:'',//用户名
        password:'',//密码
        password2:'',//确认密码
        type:'laoban'//用户类型名称
    }
    register = () => {
        // console.log(this.state)
        this.props.register(this.state)
    }
    handleChange = (name,v) => {
        this.setState({
            [name]:v
        })
    }
    goLogin =() => {
        this.props.history.replace('/login')
    }

    render() {
        const {type} = this.state
        return(
            <div>
                <NavBar>哎呀招聘</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem placeholder="请输入用户名" onChange={(v) =>{this.handleChange('username',v)}}>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder="请输入密码" type="password" onChange={(v) =>{this.handleChange('password',v)}}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder="请确认密码" type="password" onChange={(v) =>{this.handleChange('password2',v)}}>确认密码：</InputItem>
                        <WhiteSpace/>
                        <ListItem>
                            <span>用户类型：</span>
                            &nbsp;&nbsp;
                            <Radio checked={'dashen' === type} onChange={(v) =>{this.handleChange('type','dashen')}}>牛人</Radio>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={'laoban' === type} onChange={(v) =>{this.handleChange('type','laoban')}}>老板</Radio>
                        </ListItem>
                        <WhiteSpace/>
                        <Button type={"primary"} onClick={this.register}>注册</Button>
                        <Button onClick={this.goLogin}>已有账号</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
