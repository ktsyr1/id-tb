import React, { Component } from 'react'
import {center,tables} from '../../models/config'
import axios from 'axios'
import Btn from './btn'
import Time from './time'
import Iframe from 'react-iframe'
// icon 
import call from '../../svg/Icon ionic-ios-call.svg'
import accessible_icon from '../../svg/awesome-accessible-icon.svg'


export default class View_center extends Component {
    state = {
         center:{"address":{"city":"برلياس","address":"الطريق العام","map":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2698.4290996442296!2d35.91694696841773!3d33.79089625346246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518ccaa9775183b%3A0xedd5096c83c06643!2zMzPCsDQ3JzMwLjIiTiAzNcKwNTUnMDAuMyJF!5e1!3m2!1sar!2slb!4v1575491706110!5m2!1sar!2slb"},"_id":"5f27ae7cab2b404c148e4eaf","name":"العودة","wtan":[{"Insurance":["دفتر العائلة"],"document":["هوية"],"_id":"5f27ae7cab2b404c148e4eb0","Nationality":"سوري"},{"Insurance":["هوية"],"document":["بطاقة اليونسيف"],"_id":"5f27ae7cab2b404c148e4eb1","Nationality":"فلسطيني"},{"Insurance":["لا يوجد"],"document":["هوية"],"_id":"5f27ae7cab2b404c148e4eb2","Nationality":"لبناني"}],"tele_phone":12345678,"special_needs":true,"__v":0}   
        ,tables:[{"_id":"5f2896f86170e61b4c3daaa6","center_id":"5f27ae7cab2b404c148e4eaf","purview":"عظام","time":[{"_id":"5f2896f86170e61b4c3daaa7","tody":"سبت","start":"10:00","end":"13:00"},{"_id":"5f2896f86170e61b4c3daaa8","tody":"احد","start":"11:00","end":"2:00"},{"_id":"5f2896f86170e61b4c3daaa9","tody":"ثلاثاء","start":"9:00","end":"12:00"}],"__v":0},{"_id":"5f283115b040905aa8f52b5a","center_id":"5f27ae7cab2b404c148e4eaf","purview":"اسنان","time":[{"_id":"5f283115b040905aa8f52b5b","tody":"الاثنين","start":"10:00","end":"13:00"},{"_id":"5f283115b040905aa8f52b5c","tody":"الاربعاء","start":"11:00","end":"4:00"},{"_id":"5f283115b040905aa8f52b5d","tody":"الخميس","start":"9:00","end":"2:00"}],"__v":0},{"_id":"5f283100b040905aa8f52b56","center_id":"5f27ae7cab2b404c148e4eaf","purview":"قلبية","time":[{"_id":"5f283100b040905aa8f52b57","tody":"الاثنين","start":"10:00","end":"13:00"},{"_id":"5f283100b040905aa8f52b58","tody":"الاربعاء","start":"11:00","end":"4:00"},{"_id":"5f283100b040905aa8f52b59","tody":"الخميس","start":"9:00","end":"2:00"}],"__v":0},{"_id":"5f281b8dd006633ef09bc8ce","center_id":"5f27ae7cab2b404c148e4eaf","purview":"خشة","time":[{"_id":"5f281b8dd006633ef09bc8cf","tody":"الاثنين","start":"10:00","end":"13:00"},{"_id":"5f281b8dd006633ef09bc8d0","tody":"الاربعاء","start":"11:00","end":"4:00"},{"_id":"5f281b8dd006633ef09bc8d1","tody":"الخميس","start":"9:00","end":"2:00"}],"__v":0}]
        }
    componentDidMount() {
        axios.get(center(this.props.match.params.id))
            .then(res => this.setState({ center: res.data }))
        axios.get(tables(this.props.match.params.id))
                .then(res => this.setState({ tables: res.data }))
    }
    text = () => console.log(this.state)

    render() {
        const x = this.state.center
        return (
            <div className='view' >
                    {/* الاسم */}
                    <div className='box '>
                        <p className='itr'>{x &&x.name}</p>
                    </div>
                    <div className='box'>
                        <Btn data={x && x.wtan}/>
                    </div>
                    <div className='box '>
                        <div className='itr __'>
                            <img className='svg' src={call} alt={"call"}/>
                            <p className='p10'>  رقم الهاتف  </p>
                            <a href={`tel:${x && x.tele_phone}`} className='pa10'>{x && x.tele_phone}</a> 
                        </div>
                        <div className='itr __'>
                            <img className='svg' src={accessible_icon} alt={"accessible_icon"}/>
                            <p>الاحتياجات الخاصة</p>
                            <p>{x && x.special_needs}</p>
                        </div>
                    </div>
                    <div className='box'>
                        <Time data={this.state.tables} />
                    </div>   
                    <div className='box'>
                        
                         {/* المدينة  */}
                        <p>{x && x.address && x.address.city}</p>
                        {/* العنون */}
                        <p>{x && x.address && x.address.address}</p>
                        {/* الخريطة */}
                        {/* <p></p> */}
                        <Iframe url= {x && x.address && x.address.map}
                            className="b-r" />
                    </div>

            </div>
        )
    }
}

