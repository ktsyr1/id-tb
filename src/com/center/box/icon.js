import React, { Component } from 'react'  

export default class Img extends Component{  
    render(){
        return( 
            <img className='svg' src={this.props.src} alt={`${this.props.src}`}/>
            
        )
    }
}