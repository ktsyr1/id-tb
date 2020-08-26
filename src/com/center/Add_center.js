import React, { useState} from 'react' 
import Navbar from '../theme/navbar' 
import Edit from './itme'
import Axios from 'axios'
import {centers} from '../../models/config'
//
export default function Add_center () {   
    const [name ,set_name ] = useState('')  
    const [tele_phone ,set_tele_phone ] = useState('')  
    // const [name ,set_name ] = useState('')  
    const [city ,set_city ] = useState('')  
    const [address ,set_address ] = useState('')  
    const [map ,set_map ] = useState('')  
    
    const data = {
        name: name, 
        tele_phone: tele_phone,
        address: {
            city: city,
            address: address,
            map: map
        }, 
        "special_needs": false, 
    }
    function add(e) {
        const token = localStorage.getItem('token') 
        e.preventDefault(); 
        Axios.post(centers,data,{headers:{ "x-auth-token" : token} })
            .then(res => window.location.assign('/center/'+res.data._id))
    } 
        if (localStorage.getItem("token")){
            if (localStorage.getItem("token").length>10){ 
            }else window.location.assign('/')  
        }else window.location.assign('/') 
    return (
        <div className='view' >
            <Navbar />
            <Edit/>
            <form className='add_center'  >
                <p>اظافة مركز طبي </p>
                <label>
                    <div>
                        <p> اسم المركز</p>
                        <input type="text" name="name"  onChange={e => set_name(e.target.value)} />
                    </div>
                    <div>
                        <p>رقم الهاتف </p>
                        <input type="number" name="tele_phone" onChange={e => set_tele_phone(e.target.value)}  />
                    </div>
                    {/* <div>
                        <p>كلمة السر</p>
                        <input type="radio" id="vehicle1" name="vehicle1" defaultValue='يوجد'/>
                        <input type="radio" id="vehicle1" name="vehicle1" defaultValue='لا يوجد'/>
                    </div> */}
                    <div>
                        <p>المدينة</p>
                        <input type="text" name="city" onChange={e => set_city(e.target.value)}/>
                    </div>
                    <div>
                        <p>العنوان</p>
                        <input type="text" name="address" onChange={e => set_address(e.target.value)}/>
                    </div>
                    <div>
                        <p> العنوان على الخريطة  </p>
                        <input type="text" name="map" onChange={e => set_map(e.target.value)}/>
                    </div>
                </label>
                <input id="submit"  type='submit' onClick={add} defaultValue='اظافة المركز' />
            </form>
        </div>
    )
} 
