import React, { Component } from 'react'   
import {NavLink} from 'react-router-dom'
export default class Nav extends Component{ 
    render(){
        return(
            <nav className='nav'>
               <NavLink to='/' className='logo'>id Tb</NavLink>
            </nav>
        )
    }
}