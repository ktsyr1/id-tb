import React, { Component } from 'react'
import {center,tables} from '../../models/config'
import axios from 'axios'
// com
import Btn from './btn'
import Time from './time'
import Iframe from 'react-iframe'
import Navbar from '../theme/navbar'
// icon 
import call from '../../svg/Icon ionic-ios-call.svg'
import accessible_icon from '../../svg/Icon awesome-city.svg'
import city from '../../svg/Icon awesome-city.svg'
import maps from '../../svg/feather-map-pin.svg'
import map from '../../svg/Icon awesome-map-marked-alt.svg'
import Edit from './itme'

//
export default class Add_center extends Component {
    state = { }
    componentDidMount() {
        // axios.post(centers)
            // .then(res => this.setState({ center: res.data }))
         
    } 

    render() {
        const x = this.state.center
        return (
            <div className='view' onClick={this.text} >
                    <Navbar />
                    <Edit/>
                    <form className='add_center' onClick={this.text} >
                        <p>اظافة مركز طبي </p>
                        <label>
                            <div>
                                <p> اسم المركز</p>
                                <input type="text" name="name"  onChange={this.i_name}/>
                            </div>
                            <div>
                                <p>رقم الهاتف </p>
                                <input type="number" name="tele_phone" onChange={this.i_username} />
                            </div>
                            {/* <div>
                                <p>كلمة السر</p>
                                <input type="radio" id="vehicle1" name="vehicle1" defaultValue='يوجد'/>
                                <input type="radio" id="vehicle1" name="vehicle1" defaultValue='لا يوجد'/>
                            </div> */}
                            
                            <div>
                                <p>المدينة</p>
                                <input type="text" name="city" onChange={this.i_email}/>
                            </div>
                            <div>
                                <p>العنوان</p>
                                <input type="text" name="address" onChange={this.i_email}/>
                            </div>
                            <div>
                                <p> العنوان على الخريطة  </p>
                                <input type="text" name="map" onChange={this.i_email}/>
                            </div>
                        </label>
                        <input id="submit"  type='submit' onClick={this.signup} defaultValue='تسجيل' />
                    </form> 
                     
            </div>
        )
    }
}

