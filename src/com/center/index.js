import React, { Component } from 'react'
import axios from 'axios' 
import {Link} from 'react-router-dom' 

import './center.sass'
import {centers} from '../../models/config'
export default class Index extends Component {
    state = {
        // data: []
        data:[{"address":{"city":"برلياس"},"_id":"5f27ae7cab2b404c148e4eaf","name":"العودة","wtan":[{"Nationality":"سوري"},{"Nationality":"فلسطيني"},{"Nationality":"لبناني"}],"special_needs":true},{"address":{"city":"برلياس"},"_id":"5f274f3aab2b404c148e4eab","name":"التظامن","wtan":[{"Nationality":"سوري"},{"Nationality":"فلسطيني"},{"Nationality":"لبناني"}],"special_needs":false}]
    }

    componentDidMount() {
        axios.get(centers)
            .then(res => this.setState({ data: res.data }))
            
    }
    ic(s){ 
        if(s === true){
            return console.log(s);
        }
        if (s === false){
            return(document.querySelector('.needs').style.color = '#f00')
        }
    }
    text = () => console.log(this.state.data)
    render() {
        return (
            <div onLoad={this.text}> 
                {this.state.data.map(x =>
                    <div key={x._id} className='card' >
                        <Link to={`/${x._id}`}  >
                            <div className='title'>
                                <h3>{x.name}</h3>
                            </div>
                            <div className='footer'>
                                <div className='city __'>
                                    <span className="material-icons">location_on</span>
                                    <p>{x.address.city}</p>
                                </div>
                                <div className='__' id={x.special_needs.toString()}>
                                    <span className="material-icons">accessible_forward</span>
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