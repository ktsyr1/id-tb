import React, { Component} from 'react'  
import Axios from 'axios'
import {center} from '../../../models/config'
//
export default class AddWatn extends Component { 
    state = { 
        Insurance: [] , document: '', Nationality: ""  
    } 
    set_Insurance =(e)=> this.setState({Insurance:e.target.value}) 
    set_document =(e)=> this.setState({document:e.target.value}) 
    set_Nationality =(e)=> this.setState({Nationality:e.target.value}) 

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
        
        Axios.put( url , data , config )
            .then(res => console.log(res.data) )
    } 
    // c=()=>{
    //     if (localStorage.getItem("token")){
    //         if (localStorage.getItem("token").length>10){ 
    //         }else window.location.assign('/')  
    //     }else window.location.assign('/') 
    // }
    x_add=(e)=>{ 
        e.preventDefault(); 
        document.querySelector('#Popup').style.display = 'none' 
        document.querySelector('.add_watn').style.display = 'none' 
    }
    render(){ 
        return (
            <div className='add_watn' > 
                 <form className='forms   '  >
                    <p>اظافة  معلومات الجنسية </p>
                   <label>
                        <div>
                            <p>الجنسية</p>
                            <input type="text" name="Insurance"  onChange={this.set_Insurance} />
                        </div>
                        <div>
                            <p>الاوراق الثبوتية</p>
                            <input type="text" name="document" onChange={this.set_document}  />
                        </div>
                         
                        <div>
                            <p>التأمين</p>
                            <input type="text" name="Nationality" onChange={this.set_Nationality}/>
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
