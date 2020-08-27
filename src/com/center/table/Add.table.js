import React, { Component} from 'react'  
import Axios from 'axios'
import { tables} from '../../../models/config'
//
export default class AddTable extends Component { 
    state = { 
        center_id:'',
        purview:'', 
        tody:'',
        start:'',
        end:'',
        doctor:''
    } 
    set_purview =(e)=> this.setState({purview:e.target.value}) 
    set_tody =(e)=> this.setState({tody:e.target.value}) 
    set_start =(e)=> this.setState({start:e.target.value}) 
    set_end =(e)=> this.setState({end:e.target.value}) 
    set_doctor =(e)=> this.setState({doctor:e.target.value}) 

    x_add=(e)=>{ 
        e.preventDefault(); 
        document.querySelector('#Popup').style.display = 'none' 
        document.querySelector('.add_table').style.display = 'none' 
    }
    
    add=(e) =>{
        e.preventDefault(); 
        console.log(this.state);
        
        const token = localStorage.getItem('token')
        const config = {headers:{ "x-auth-token" : token} }
        let _id = window.location.pathname.slice(8)
        const url = tables(_id)
        const data =  {
            center_id: _id,
            purview: this.state.purview ,
            time: [
                { 
                    tody: this.state.tody,
                    start: this.state.start,
                    end: this.state.end,
                    doctor:  this.state.doctor
                }, 
            ], 
        } 
        console.log(data);
        
        Axios.post( url , data , config )
            .then(res => console.log(res)
            )
    } 
    render(){ 
        return (
            <div className='add_table' style={{display:'none'}}> 
                 <form className='forms   '  >
                    <p>اظافة  معلومات الاختصاص </p>
                   <label>
                        <div>
                            <p>الاختصاص</p>
                            <input type="text" name="purview"  onChange={this.set_purview} />
                        </div> 
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
