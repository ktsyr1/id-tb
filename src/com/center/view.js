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
import EditCenter from './Edit_center'

//
export default class View_center extends Component {
    state = { }
    componentDidMount() {
        axios.get(center(this.props.match.params.id))
            .then(res => this.setState({ center: res.data }))
        axios.get(tables(this.props.match.params.id))
                .then(res => this.setState({ tables: res.data }))
    }
    // text = () => console.log(this.state.tables)

    render() {
        const x = this.state.center
        return (
            <div className='view' onClick={this.text} >
                    <Navbar />
                    <Edit data={this.props.match.params.id}/>
                    <EditCenter center={this.state.center}/>
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
                            <p className='p10'>مدخل ذوي الاحتياجات الخاصة </p>
                            <p>{x && x.special_needs}</p>
                        </div>
                    </div>
                    <div className='box'>
                        <Time data={this.state.tables} />
                    </div>   
                    <div className='box'>
                        <div className='itr __'>
                            <img className='svg' src={city} alt={"city"}/>
                            <p className='p10'>المدينة</p>
                            <p>{x && x.address && x.address.city}</p>
                        </div>
                        <div className='itr __'>
                            <img className='svg' src={maps} alt={"maps"}/>
                            <p className='p10'>  العنوان  </p>
                            <p>{x && x.address && x.address.address}</p>
                        </div>
                        <div className='itr __'>
                            <img className='svg' src={map} alt={"map"}/>
                            <p className='p10'>  العنوان على الخريطة  </p>
                        </div>
                        <Iframe url= {x && x.address && x.address.map} className="b-r" />

                    </div>

            </div>
        )
    }
}

