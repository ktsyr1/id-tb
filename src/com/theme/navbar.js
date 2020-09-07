import React, { Component } from 'react'   
// import {NavLink} from 'react-router-dom'
// icon 
import Back from '../../svg/Back.svg'
import item from '../../svg/menu_item.svg'
import './nav.sass'
import AddReport from '../center/report/Add.report'
export default class Navbar extends Component{ 
    
    open_Popup=() => { 
        document.querySelector('._X').style.display = 'block'
        document.getElementById('Popup').style.display = 'flex'
    } 
      
    render(){
        return(
            <header>
                <nav className='navbar '>
                    <div onClick={()=>window.history.back()}>
                        <img className='svg' src={Back} alt={"Back"}/>
                    </div>
                    <img className='svg' style={{width: "5px"}} src={item} alt={"item"} onClick={this.open_Popup} /> 
                </nav>
                <AddReport />
            </header>
            
        )
    }
}