import React, { Component } from 'react'
import Navbar from './navbar'
export default class About extends Component{ 
    render(){
        return(
            <>
            <Navbar />
            <div className=' '> 
               <div className='box '> 
                <b>من نحن</b>
                <p>
                    نحن مجموعة متطوعين والمتطوعات نهدف لتسهيل الوصول واللربط بين النقاط الطبية والمرضى
                </p>
                </div>
                <div className='box'>
                    <b> ميزات التطبيق</b >
                   
                    <div className=' itr'>
                        <p>1 - سريع و بسيط  وسهل الاستخدام</p>
                        <p>2 - بعض الميزات تعمل بدون اتصال بالانترنت</p>
                        <p>3 - الوصول للاطباء بشكل اسرع </p>
                        <p>4 - تحديثات المعلومات بشكل مستمر</p>
                        <p>5 - حجم التطبيق صغير بحجم صورة كاميرا الهاتف</p>
                        
                    </div>
                </div>
                

            </div>
            </>
        )
    }
}