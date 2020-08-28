import React, { Component} from 'react'  
import Axios from 'axios'
// import {table} from '../../../models/config'
//
export default class AddTody extends Component { 
    state = {  
        tody:'',
        start:'',
        end:'',
        doctor:''
    }   
    set_tody =(e)=> this.setState({tody:e.target.value}) 
    set_start =(e)=> this.setState({start:e.target.value}) 
    set_end =(e)=> this.setState({end:e.target.value}) 
    set_doctor =(e)=> this.setState({doctor:e.target.value}) 

    x_add=(e)=>{ 
        e.preventDefault(); 
        document.querySelector('#Popup').style.display = 'none' 
         document.querySelector('.add_tody').style.display = 'none' 
    }
    add=(e) =>{
        e.preventDefault(); 
        let _id = localStorage.getItem('_id_table') 
        const url = `http://localhost:5050/api/v1/table/${_id}`
        const token = localStorage.getItem('token')
        const config = {headers:{ "x-auth-token" : token} } 
         
        const data ={ 
            time:{
                tody: this.state.tody,
                start: this.state.start,
                end: this.state.end,
                doctor:  this.state.doctor
            }
        }
         
        Axios.post( url , data , config ) 
            .then(res => {
                if (res.status===200){
                    window.location.reload(false)
                }
        })
    } 
    render(){ 
        return (
            <div className='add_table add_tody'>
                <form className='forms   '  >
                    <p>اظافة  مواعيد  الاختصاص </p>
                    <label>
                        <div>
                        <p>الطبيب/ة</p>
                             <input type="text" name="doctor" onChange={this.set_doctor}/>
                        </div>
                         
                        <div>
                        <p>يوم الدوام</p>
                            <input type="text" name="tody" onChange={this.set_tody}  />
                        </div>
                        <div className='__3'>
                            <div>
                                <p>من الساعة</p>
                                <input type="time" name="start" onChange={this.set_start}  />
                            </div> 
                            <div>
                                <p>الى الساعة</p>
                                <input type="time" name="end" onChange={this.set_end}  />
                            </div>
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
