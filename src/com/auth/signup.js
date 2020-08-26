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
            .then(res => {
                this.setState({ data:res.data })
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('name', this.state && this.state.name );

            })
    }
    render(){
        if (localStorage.getItem("token")){
            if (localStorage.getItem("token").length> 10){
                window.location.assign('/') 
                this.setState({login__:true})
            }            
        }
        
        return(
                <form className='forms signup' onClick={this.text} >
                    <p>تسجيل </p>
                    <label>
                        <div>
                            <p>الاسم</p>
                            <input type="text" name="name"  onChange={this.i_name}/>
                        </div>
                        <div>
                            <p>اسم المستخدم</p>
                            <input type="text" name="username" onChange={this.i_username}/>
                        </div>
                        <div>
                            <p>الايميل</p>
                            <input type="email" name="email" onChange={this.i_email}/>
                        </div>
                        <div>
                            <p>كلمة السر</p>
                            <input type="password" name="password"   onChange={this.i_password}/>
                        </div>
                    </label>
                    <input id="submit"  type='submit' onClick={this.signup} defaultValue='تسجيل' />
                    <p>اذا كان لديك حساب قم <span onClick={this.login} >بتسجيل الدخول</span></p> 
                </form>
        )
    }
}