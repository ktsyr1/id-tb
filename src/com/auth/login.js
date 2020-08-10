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
    
    componentDidMount(){
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
            .then(res => this.setState({
                token:res.data.token,
                username:res.data.username
            }))
        localStorage.setItem('token', this.state &&this.state.token );
        localStorage.setItem('username', this.state && this.state.username);
        if (localStorage.getItem('token').length>=10){
            this.setState({login__:true})
            window.location.replace('/')
        }
    }
    i_email=(event)=> this.setState({mail:event.target.value});  
    i_password=(event)=> this.setState({password:event.target.value});  

    render(){
        let ss
        if (this.state.login__  === true){
            ss= <div> تم تسجيل الدخول </div>
        }
        return(
            <form className='login'>
                <p>تسجيل الدخول</p>
                {ss}
                <label>
                    <input type="email" name="mail" placeholder='الايميل' onChange={this.i_email}/>
                    <input type="password" name="password" placeholder='كلمة السر' onChange={this.i_password}/>
                </label>
                    <input id="submit"  type="submit" value=" بتسجيل الدخول " onClick={this.login }/>
                <p>اذا كان لديك حساب قم <span onClick={this.signup} > بتسجيل الدخول </span></p> 
                {/* {this.state.password}<br />
                {this.state.mail} */}
            </form>
        )
    }
}