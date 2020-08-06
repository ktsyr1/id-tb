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

export default class Nav extends Component{ 
    menu_open(){
        document.querySelector('.menu').style.display = 'block'
    }
    menu_close(){
        document.querySelector('.menu').style.display = 'none'
    }
    render(){
        return(
            <nav className='nav'>
                <div className='menu' >
                    <img className='svg' src={menu} alt={"menu"} onClick={this.menu_close} />
                    <div>
                        <Itme url={'#'} icon={home} name={'الرئيسية'} />
                        <Itme url={'#'} icon={hospital} name={'المراكز الطبية'} />
                        <Itme url={'#'} icon={hospital2} name={'المشافي'} />
                        <Itme url={'#'} icon={call} name={'الارقام الضرورية'} />
                        <Itme url={'#'} icon={help} name={'حول التطبيق'} />
                        <Itme url={'#'} icon={login} name={'تسجيل دخول'} /> 
                          
                    </div>
                </div>
                <img className='svg' src={menu} alt={"menu"} onClick={this.menu_open} />
                <img className='svg' src={logo} alt={"logo"}/>
                <img className='svg' src={search} alt={"search"}/>
            </nav>
        )
    }
}