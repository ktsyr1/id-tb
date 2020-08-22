import React, { Component } from 'react'
import axios from 'axios' 
import {Link} from 'react-router-dom' 
// svg 
import accessible_icon from '../../svg/awesome-accessible-icon.svg'
import map_pin from '../../svg/feather-map-pin.svg'

import Nav from '../theme/nav'
import './center.sass'
import {centers} from '../../models/config'
export default class Index extends Component {
    state = {}

    componentDidMount() {
        axios.get(centers)
            .then(res => this.setState({ data: res.data }))
            
    }
    // ic(s){ 
    //     if(s === true){
    //         return console.log(s);
    //     }
    //     if (s === false){
    //         return(document.querySelector('.needs').style.color = '#f00')
    //     }
    // }
    // text = () => console.log(this.state.data)
    render() {
        return (
            <div> 
                <Nav />
                {this.state.data && this.state.data.map(x =>
                    <div key={x._id} className='card' >
                        <Link to={`/center/${x._id}`}  >
                            <div className='title'>
                                <h3>{x.name}</h3>
                            </div>
                            <div className='footer'>
                                <div className='city __'>
                                    <img className='svg' src={map_pin} alt={"map_pin"}/>
                                    <p>{x.address.city}</p>
                                </div>
                                <div className='__' id={x.special_needs.toString()}>
                                    <img className='svg' src={accessible_icon} alt={"accessible_icon"}/>
                                    <p>ذوي الاحتياجات الخاصة</p>

                                </div>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        )
    }
}