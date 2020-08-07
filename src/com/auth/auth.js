import React, { Component } from 'react'
import Navbar from '../theme/navbar'
import Login from './login'
import './auth.sass'
import Signup from './signup'
// import menu from '../../svg/Icon feather-menu.svg' 
export default class Auth extends Component{ 

    render(){
        return(
            <div id='auth'>
                <Navbar />
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