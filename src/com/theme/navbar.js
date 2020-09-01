import React, { Component } from 'react'   
// import {NavLink} from 'react-router-dom'
// icon 
import Back from '../../svg/Back.svg'
import item from '../../svg/menu_item.svg'
import './nav.sass'
import AddReport from '../center/report/Add.report'
export default class Navbar extends Component{ 
    
    open_Popup=() => { 
        document.getElementById('Popup').style.display = 'flex'
    } 
    render(){
        // let date = `${new Date().getHours()}.${new Date().getMinutes()} `
        // let end = localStorage.getItem('end_login')  
        // if (end){
        //     if (end < 24){
        //         if (end > date){
        //             localStorage.removeItem('token')
        //             localStorage.removeItem('name')
        //             localStorage.removeItem('start_login')
        //             localStorage.removeItem('end_login')
        //         }
        //     }
        // }
        return(
            <>
                <nav className='navbar '>
                <div onClick={()=>window.history.back()}>
                    <img className='svg' src={Back} alt={"Back"}/>
                </div>
                <img className='svg' style={{width: "5px"}} src={item} alt={"item"} onClick={()=>document.getElementById('Popup').style.display = 'flex'} /> 
                </nav>
                <AddReport />
            </>
            
        )
    }
}