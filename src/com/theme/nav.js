import React, { Component } from 'react'   
import {NavLink} from 'react-router-dom'
export default class Nav extends Component{ 
    render(){
        return(
            <nav className='box '>
               <NavLink to='/'>id Tb</NavLink>
            </nav>
        )
    }
}