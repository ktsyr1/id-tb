import React, { Component } from 'react'
import axios from 'axios'
import config from '../../models/config'
export default class Login extends Component{ 
    constructor(props){
        super(props)
        this.state={
            login__ :false
        }
        this.login = this.login.bind(this)
    }
     
    text = () => console.log(this.state)
    signup = () => {
        document.getElementById('signup_box').style.display = 'block'
        document.getElementById('login_box').style.display = 'none'
    }
    login (e) {
        e.preventDefault();
        const _data = { mail:this.state.mail,
            password:this.state.password
        },
        url = config.login
        axios.post(url, _data)
            .then(res => {
                if (res.status===200){ 
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('name', res.data.name);
                    localStorage.setItem('start_login',[`${new Date().getHours()}.${new Date().getMinutes()} `]) 
                    localStorage.setItem('end_login',[`${new Date().getHours() + 1}.${new Date().getMinutes()} `]) 
                    window.location.reload('/') 

                }
            })  
        } 
        i_email=(event)=> this.setState({mail:event.target.value});  
        i_password=(event)=> this.setState({password:event.target.value});  

    render(){ 
        let ss = <p>تسجيل الدخول</p>
        if (this.state.login__  === true){
            ss= <div> تم تسجيل الدخول </div>
        } 
        return(
            <form className='forms login' onClick={this.text}> 
                {ss}
                <label>
                    <div>
                        <p>البريد الإلكتروني</p>
                        <input type="email" name="mail"  onChange={this.i_email}/> 
                    </div>
                    <div>
                        <p>كلمة السر</p>
                        <input type="password" name="password" onChange={this.i_password}/>
                    </div>
                </label>
                    <input id="submit"  type="submit" onClick={this.login &&  this.login}  value=" بتسجيل الدخول "/>
                <p>اذا لم يكن لديك حساب قم <span onClick={this.signup} > بتسجيل  </span></p> 
            </form>
        )
    }
}