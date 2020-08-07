import React, { Component } from 'react'
// import Itme from './itme'

// import menu from '../../svg/Icon feather-menu.svg' 
export default class Login extends Component{ 
    state={}
    text = () => console.log(this.state)
    signup = () => {
        document.getElementById('signup_box').style.display = 'block'
        document.getElementById('login_box').style.display = 'none'
    }
    i_email=(event)=> this.setState({mail:event.target.value});  
    i_password=(event)=> this.setState({password:event.target.value});  

    render(){
        return(
                <form className='login' >
                    <p>تسجيل الدخول</p>
                    <label>
                        <input type="email" name="mail" placeholder='الايميل' onChange={this.i_email}/>
                        <input type="password" name="password" placeholder='كلمة السر' onChange={this.i_password}/>
                    </label>
                        <div id="submit" value=" " onClick={this.text}>تسجيل</div>
                    <p>اذا كان لديك حساب قم <span onClick={this.signup} > بتسجيل الدخول </span></p> 

                </form>
        )
    }
}