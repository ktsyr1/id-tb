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
                this.setState({
                    token:res.data.token,
                    name:res.data.name
                })  
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('name', res.data.name);
            })
            //  document.querySelector('.login #submit').setAttribute('defaultValue','تاكيد تسجيل الدخول'),
        } 
        i_email=(event)=> this.setState({mail:event.target.value});  
        i_password=(event)=> this.setState({password:event.target.value});  

    render(){ 
        let ss = <p>تسجيل الدخول</p>
        if (this.state.login__  === true){
            ss= <div> تم تسجيل الدخول </div>
        } 
        if (localStorage.getItem("token")){
            if (localStorage.getItem("token").length> 10){
                window.location.assign('/') 
                this.setState({login__:true})
            }            
        }
        return(
            <form className='login' onClick={this.text}> 
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
                    <input id="submit"  type="submit" onClick={this.login &&  this.login}  defaultValue=" بتسجيل الدخول "/>
                <p>اذا لم يكن لديك حساب قم <span onClick={this.signup} > بتسجيل  </span></p> 
            </form>
        )
    }
}