import React, { Component } from 'react' 
import Axios from 'axios';
import config from '../../../models/config'

export default class Edit extends Component{ 
    deleteOne=(e) =>{
        const token = localStorage.getItem('token') 
        const id = this.props.data 
        e.preventDefault(); 
        Axios.delete(config.center(id),{headers:{ "x-auth-token" : token} })
            .then(res => window.location.assign('/'))
    }
    add_watn=()=>{ 
        document.querySelector('.add_watn').style.display = 'block'  
        document.getElementById('Popup').style.display = 'none'
    }
    add_table = ()=>{ 
        document.querySelector('.add_table').style.display = 'block'  
        document.getElementById('Popup').style.display = 'none'
    }
    render(){
        let _itme , _deleteview
         if( window.location.pathname.slice(0,8)==="/center/"){ 
            _deleteview= <li onClick={this.deleteOne}>حذف المركز</li>
        }
        if (localStorage.getItem("token")){
            if (localStorage.getItem("token")<10){
                localStorage.setItem('token',undefined)
            }else {
                _itme= <> 
                        <li onClick={this.add_watn} >اظافة  معلومات الجنسية</li>
                        <li onClick={this.add_table}>اضافة  معلومات الدوام والاختصاصات</li>
                        {_deleteview}
                    </>
            }  
        }
        return( 
            <div id='Popup' display="true"> 
                <ul>
                    {_itme}
                    <li>ابلاغ عن مشكلة</li>
                </ul>
                
            </div> 
        )
    }
}