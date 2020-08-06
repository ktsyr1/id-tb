import React, { Component } from 'react'   
import {NavLink} from 'react-router-dom'
import menu from '../../svg/Icon feather-menu.svg'
import search from '../../svg/Icon awesome-search.svg'
import logo from '../../svg/logo.svg'
export default class Nav extends Component{ 
    render(){
        return(
            <nav className='nav'>
                <img className='svg' src={menu} alt={"menu"}/>
                <img className='svg' src={logo} alt={"logo"}/>
                <img className='svg' src={search} alt={"search"}/>
            </nav>
        )
    }
}