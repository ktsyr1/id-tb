import React, { Component } from 'react'
import Itme from './itme'
import menu from '../../svg/Icon feather-menu.svg'
import search from '../../svg/Icon awesome-search.svg'
import logo from '../../svg/logo.svg'
import home from '../../svg/Icon awesome-home.svg'
import hospital from '../../svg/Icon awesome-hospital.svg'
import hospital2 from '../../svg/Icon awesome-hospital-alt.svg'
import call from '../../svg/Icon feather-phone-call.svg'
import help from '../../svg/Icon feather-help-circle.svg'
import login from '../../svg/Icon feather-log-in.svg'
import logout_icon from '../../svg/Icon feather-log-out.svg'

export default class Nav extends Component{ 
    constructor(props){
        super(props)
        this.state={
            login_s :false
        }
        this.menu_open = this.menu_open.bind(this)

    }
    
    menu_open(){
        document.querySelector('.menu').style.display = 'block'
        console.log(this.state);

        if (localStorage.getItem('token')){
            if (localStorage.getItem('token').length>=10){
                return this.setState({login_s: true})
            }
        }
        
    }
    menu_close(){
        document.querySelector('.menu').style.display = 'none'
    } 
    render(){
        let _login
        if (this.state.login_s  === true){
            _login = 
            < div className='a' onClick ={()=>{
                localStorage.setItem('username',undefined)
                localStorage.setItem('token',undefined)
                window.location.reload(false)
                }}>
                <img className='svg' src={logout_icon} alt={logout_icon} />
                <p>تسجيل خروج</p>
            </div>
             
        }else{
            _login = <Itme url={'/auth'} icon={login} name={'تسجيل دخول'} />  
        } 
        return(
            <nav className='nav'>
                <div className='menu' >
                    <div className='__'>
                        <img className='svg' src={menu} alt={"menu"}  onClick={this.menu_close} />
                        <p className='p_'>{localStorage.getItem('username')}@</p>
                    </div>
                    
                    <div>
                        <Itme url={'#'} icon={home} name={'الرئيسية'} />
                        <Itme url={'#'} icon={hospital} name={'المراكز الطبية'} />
                        <Itme url={'#'} icon={hospital2} name={'المشافي'} />
                        <Itme url={'#'} icon={call} name={'الارقام الضرورية'} />
                        <Itme url={'#'} icon={help} name={'حول التطبيق'} />
                        {_login}
                          
                    </div>
                </div>
                <img className='svg' src={menu} alt={"menu"} onClick={this.menu_open} />
                <img className='svg' src={logo} alt={"logo"}/>
                <img className='svg' src={search} alt={"search"}/>
            </nav>
        )
    }
}