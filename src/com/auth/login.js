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
        console.log(this.state);
        
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
        if (localStorage.getItem("token")){
            if (localStorage.getItem("token")<10){
                localStorage.setItem('token',undefined)
            } else if (localStorage.getItem('token').length>=10){
                this.setState({login__:true})
                window.history.back()
            }
        }
        let ss = <p>تسجيل الدخول</p>
        if (this.state.login__  === true){
            ss= <div> تم تسجيل الدخول </div>
        } 
        
        return(
            <form className='login' onClick={this.text}> 
                {ss}
                <label>
                    <input type="email" name="mail" placeholder='الايميل' onChange={this.i_email}/>
                    <input type="password" name="password" placeholder='كلمة السر' onChange={this.i_password}/>
                </label>
                    <input id="submit"  type="submit" onClick={this.login &&  this.login}  defaultValue=" بتسجيل الدخول "/>
                <p>اذا لم يكان لديك حساب قم <span onClick={this.signup} > بتسجيل  </span></p> 
            </form>
        )
    }
}