import React, { Component } from 'react'   
import {NavLink} from 'react-router-dom'
// icon 
import Back from '../../svg/Back.svg'
import item from '../../svg/menu_item.svg'
import './nav.sass'
export default class Navbar extends Component{ 
    render(){
        return(
            <nav className='navbar '>
               <NavLink to='/'>
                   <img className='svg' src={Back} alt={"Back"}/>
               </NavLink>
               <img className='svg' style={{width: "5px"}} src={item} alt={"item"}/>

            </nav>
        )
    }
}