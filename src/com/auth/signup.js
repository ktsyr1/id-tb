import React, { Component } from 'react' 
import axios from 'axios'
import config from '../../models/config'

export default class Signup extends Component{ 
    constructor(props){
        super(props)
        this.state={
            login__ :false,
            name:"",username:"",mail:'',password:'',
        }
        this.signup = this.signup.bind(this)
    }
    text = () => console.log(this.state)
    login = () => {
        document.getElementById('signup_box').style.display = 'none'
        document.getElementById('login_box').style.display = 'block'
    }
    i_name=(event)=> this.setState({name:event.target.value});  
    i_username=(event)=> this.setState({username:event.target.value});  
    i_email=(event)=> this.setState({mail:event.target.value});  
    i_password=(event)=> this.setState({password:event.target.value});  
    signup (e) {
        e.preventDefault();
        const _data = {
            name:this.state.name,
            username:this.state.username,
            mail:this.state.mail,
            password:this.state.password
        },
        url = config.signup
        axios.post(url, _data)
            .then(res => this.setState({
                data:res.data,
                // token:res.data.token,
                // username:res.data.username
            }))
        localStorage.setItem('token', this.state &&this.state.token );
        localStorage.setItem('username', this.state && this.state.username);
        if (localStorage.getItem('token').length>=10){
            this.setState({login__:true})
            window.location.replace('/')
        }
    }
    render(){
        return(
                <form className='signup' onClick={this.text} >
                    <p>تسجيل </p>
                    <label>
                        <input type="text" name="name" placeholder='الاسم' onChange={this.i_name}/>
                        <input type="text" name="username" placeholder='اسم المستخدم' onChange={this.i_username}/>
                        <input type="email" name="email" placeholder='الايميل' onChange={this.i_email}/>
                        <input type="password" name="password" placeholder='كلمة السر' onChange={this.i_password}/>
                    </label>
                    {/* <input id="submit"  id='submit' onClick={this.signup} defaultValue='تسجيل' /> */}
                    <p>اذا كان لديك حساب قم <span onClick={this.login} >بتسجيل الدخول</span></p> 
                </form>
        )
    }
}