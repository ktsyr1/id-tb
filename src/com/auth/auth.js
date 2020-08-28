import React, { Component } from 'react'
import Navbar from '../theme/navbar'
import Login from './login'
import './auth.sass'
import Signup from './signup'
import Edit from '../center/box/itme' 
export default class Auth extends Component{  
    render(){
        if (localStorage.getItem("token")){
            if (localStorage.getItem("token").length> 10){
                window.location.assign('/') 
                this.setState({login__:true})
            }            
        }
        // let date = `${new Date().getHours()}.${new Date().getMinutes()} `
        // let end = localStorage.getItem('end_login')  
        // if (end){
        //     if (end < 24){
        //         if (end > date){
        //             localStorage.removeItem('token')
        //             localStorage.removeItem('name')
        //             localStorage.removeItem('start_login')
        //             localStorage.removeItem('end_login')
        //         }
        //     }
        // }
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