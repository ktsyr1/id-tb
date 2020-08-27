import React, { Component } from 'react' 
export default class Alert extends Component{ 
    render(){
        return(
            <div className='box alert' onClick={()=> document.querySelector('.alert').remove()}>
                <p>{this.props.data}</p> 
            </div>
        )
    }
}