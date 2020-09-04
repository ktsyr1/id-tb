import React, { Component } from 'react'
import {center,tables} from '../../../models/config'
import axios from 'axios'
// com
import ViewWtan from '../watn/view.watn'
import ViewTable from '../table/view.table'
import Iframe from 'react-iframe'
import Navbar from '../../theme/navbar'
// icon 
import call from '../../../svg/Icon ionic-ios-call.svg'
import accessible_icon from '../../../svg/Icon awesome-city.svg'
import city from '../../../svg/Icon awesome-city.svg'
import maps from '../../../svg/feather-map-pin.svg'
import map from '../../../svg/Icon awesome-map-marked-alt.svg'

import Edit from '../box/itme'
import EditCenter from './Edit.center'
import AddWatn from '../watn/Add.watn'
import AddTable from '../table/Add.table'
import AddTody from '../table/Add_tody.table'

//
export default class View_center extends Component {
    state = { }
    componentDidMount() {
        
        axios.get(center(this.props.match.params.id))
            .then(res => this.setState({ center: res.data }))
        axios.get(tables(this.props.match.params.id))
                .then(res => this.setState({ tables: res.data }))
    }
     
    _close(){
        document.querySelector('._X').style.display = 'none'
        document.querySelector('#Popup').style.display = 'none'
        if(document.querySelector('#n_item')) document.querySelector('#n_item').style.display = 'none'
        if(document.querySelector('#t_item')) document.querySelector('#t_item').style.display = 'none'
        if(document.querySelector('#d_item')) document.querySelector('#d_item').style.display = 'none'
    }
    render() {
        const x = this.state.center 
        return (
            <div className='view' onClick={this.text} >
                <div className='_X' onClick={this._close}>  </div>
                
                    <Navbar />
                    <Edit data={this.props.match.params.id}/>
                    <EditCenter center={this.state.center}/>
                    <AddWatn />
                    <AddTable />
                    <AddTody />
                    <div className='box '>
                        <p className='itr'>{x &&x.name}</p>
                    </div>
                    <div className='box'>
                        <ViewWtan data={x && x.wtan}/>
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
                        <ViewTable data={this.state.tables} />
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

