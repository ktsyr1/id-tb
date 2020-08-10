import React, { Component } from 'react'   
import {Link} from 'react-router-dom'
export default class ItmeNav extends Component{ 
    menu_close(){
        document.querySelector('.menu').style.display = 'none'
    }
    render(){
        return(
            <Link to={this.props.url} >
                <img className='svg' src={this.props.icon} alt={this.props.icon} />
                <p>{this.props.name}</p>
            </Link>
        )
    }
}