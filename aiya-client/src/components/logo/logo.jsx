import React,{Component} from 'react'
import './logo.css'
import logo from './logo.jpg'
class Logo extends Component{
    render() {
        return(
            <div className={"logo-container"}>
                <img src={logo} alt="logo" className='logo-img'/>
            </div>
        )
    }
}
export default Logo
