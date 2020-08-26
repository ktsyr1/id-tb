import React, { Component } from 'react' 
import Axios from 'axios';
import config from '../../models/config'

export default class Edit extends Component{ 
    deleteOne=(e) =>{
        const token = localStorage.getItem('token') 
        const id = this.props.data 
        e.preventDefault(); 
        Axios.delete(config.center(id),{headers:{ "x-auth-token" : token} })
            .then(res => window.location.assign('/'))
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
                        <li>اظافة موعد</li>
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