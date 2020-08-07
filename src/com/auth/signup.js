import React, { Component } from 'react' 

export default class Signup extends Component{ 
    text = () => console.log(this.state)
    login = () => {
        document.getElementById('signup_box').style.display = 'none'
        document.getElementById('login_box').style.display = 'block'
    }
    i_name=(event)=> this.setState({name:event.target.value});  
    i_username=(event)=> this.setState({username:event.target.value});  
    i_email=(event)=> this.setState({mail:event.target.value});  
    i_password=(event)=> this.setState({password:event.target.value});  
    
    render(){
        return(
                <form className='signup' >
                    <p>تسجيل </p>
                    <label>
                        <input type="text" name="name" placeholder='الاسم' onChange={this.i_name}/>
                        <input type="text" name="username" placeholder='اسم المستخدم' onChange={this.i_username}/>
                        <input type="email" name="email" placeholder='الايميل' onChange={this.i_email}/>
                        <input type="password" name="password" placeholder='كلمة السر' onChange={this.i_password}/>
                    </label>
                    <div id="submit" onClick={this.text}>تسجيل الدخول</div>
                    <p>اذا كان لديك حساب قم <span onClick={this.login} >بتسجيل الدخول</span></p> 
                </form>
        )
    }
}