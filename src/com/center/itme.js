import React, { Component } from 'react' 
export default class Edit extends Component{ 
    render(){

        let _itme 
        if (localStorage.getItem("token")){
            if (localStorage.getItem("token")<10){
                localStorage.setItem('token',undefined)
            }else {
                _itme= <>
                        <li>تعديل</li>
                        <li>اظافة موعد</li>
                    </>
            }  
        }
        return( 
            <div id='Popup' display="true">
                <div>.</div>
                <ul>
                    {_itme}
                    <li>ابلاغ عن مشكلة</li>
                </ul>
                
            </div> 
        )
    }
}