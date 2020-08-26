import React, { Component } from 'react'
import Navbar from '../theme/navbar'
import Login from './login'
import './auth.sass'
import Signup from './signup'
import Edit from '../center/box/itme'
// import menu from '../../svg/Icon feather-menu.svg' 
export default class Auth extends Component{ 
    componentDidMount(){ 
            // if (localStorage.getItem("token")<10){
            //     localStorage.setItem('token','')
            // } else if (localStorage.getItem('token').length>=10){
            //     this.setState({login__:true})
                
            // } 
    }
    render(){
        if (localStorage.getItem("token")){
            if (localStorage.getItem("token").length> 10){
                window.location.assign('/') 
                this.setState({login__:true})
            }            
        }
        return(
            <div id='auth'>
                <Navbar />
                <Edit/>
                <div id='login_box'>
                    <Login />
                </div>
                <div id='signup_box'>
                    <Signup />
                </div>
            </div>
        )
    }
}