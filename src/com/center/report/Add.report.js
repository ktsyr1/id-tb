import React, { Component} from 'react'  
import Axios from 'axios'
import {reports} from '../../../models/config'
//
export default class AddReport extends Component { 
    state = { 
        node:''
    } 
    set_node =(e)=> this.setState({node:e.target.value}) 

    x_add=(e)=>{ 
        e.preventDefault(); 
        document.querySelector('#Popup').style.display = 'none' 
         document.querySelector('.report').style.display = 'none' 
    }
    add=(e) =>{
        e.preventDefault(); 
        const url = reports
        const token = localStorage.getItem('token')
        const config = {headers:{ "x-auth-token" : token} } 
         
        const data ={
            node: this.state.node,
            url: window.location.href ,
            done: false
        }  
        Axios.post( url , data , config ) 
         .then(res => {
            if (res.status===200){
                document.querySelector('.report').style.display = 'none'
                this.setState({node:''})
            }
         })
    } 
    render(){ 
        return (
            <div className=' report'>
                <form className='forms   '  >
                    <p>ابلاغ عن مشكلة</p>
                    <label>
                        <div>
                            <p>المشكلة</p>
                            <textarea type="text" name="node" onChange={this.set_node}  />
                        </div>
                    </label>
                    <div className='__'>
                            <input id="submit"  type='submit' onClick={this.x_add} value='الغاء'  style={{backgroundColor:"#fff",color:"#000"}}/>
                            <input id="submit"  type='submit' onClick={this.add} value='اظافة معلومات الاختصاص' />
                        </div>
                </form>
            
            </div>
        )}
} 
