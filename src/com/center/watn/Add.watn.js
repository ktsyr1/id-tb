import React, { Component} from 'react'  
import Axios from 'axios'
import {center} from '../../../models/config'
// import {auth} from '../auth/check'

//
export default class AddWatn extends Component { 
    state = { 
        Insurance: [] , document: '', Nationality: ""  
    } 
    set_Insurance =(e)=> this.setState({Insurance:e.target.value}) 
    set_document =(e)=> this.setState({document:e.target.value}) 
    set_Nationality =(e)=> this.setState({Nationality:e.target.value}) 

    x_add=(e)=>{ 
        e.preventDefault(); 
        document.querySelector('#Popup').style.display = 'none' 
        document.querySelector('.add_watn').style.display = 'none' 
    }
    add=(e) =>{
        
        e.preventDefault(); 
        
        const token = localStorage.getItem('token')
        const config = {headers:{ "x-auth-token" : token} }
        const url = center(window.location.pathname.slice(8))
         
        const data ={
            wtan:[{
                Insurance: this.state.Insurance,
                document: this.state.document,
                Nationality: this.state.Nationality
            }]
        }  
        
        Axios.post( url , data , config )
        .then(res => {
            console.log(res)
            
        })
        window.location.reload(false)
    } 
    render(){ 
        
    let date = `${new Date().getHours()}.${new Date().getMinutes()} `
    let start = localStorage.getItem('time_login') 
    let end = start + 1
    if (start){
        if (end <= 24){
            if (end >= date){
                console.log(11);
                
            }
        }
    }   
        return (
            <div className='add_watn' > 
                 <form className='forms   '  >
                    <p>اظافة  معلومات الجنسية </p>
                   <label>
                        <div>
                            <p>الجنسية</p>
                            <input type="text" name="Nationality"  onChange={this.set_Nationality} />
                        </div>
                        <div>
                            <p>الاوراق الثبوتية</p>
                            <input type="text" name="document" onChange={this.set_document}  />
                        </div>
                         
                        <div>
                            <p>التأمين</p>
                            <input type="text" name="Insurance" onChange={this.set_Insurance}/>
                        </div> 
                    </label>
                    <div className='__'>
                            <input id="submit"  type='submit' onClick={this.x_add} value='الغاء'  style={{backgroundColor:"#fff",color:"#000"}}/>
                            <input id="submit"  type='submit' onClick={this.add} value='اظافة معلومات الجنسية' />

                        </div>
                </form>
            
            </div>
        )}
} 
