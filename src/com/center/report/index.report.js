import React, { Component } from 'react'
import axios from 'axios' 
// import {Link} from 'react-router-dom' 
// svg 
import '../center.sass'
import {reports} from '../../../models/config'
import Navbar from '../../theme/navbar'
export default class Reports extends Component {
    state = {}

    componentDidMount() {
        
        const token = localStorage.getItem('token')
        const config = {headers:{ "x-auth-token" : token} } 
        axios.get(reports ,config)
            .then(res => this.setState({ data: res.data }))
            
    }  
    render() {
        console.log(this.state);
        
        return (
            <div> 
                <Navbar />
                {this.state.data && this.state.data.map(x =>
                    <div key={x._id} className='card' >
                        {/* <Link to={`/center/${x._id}`}  > */}
                            <div className='title'>
                                <h3>{x.node}</h3>
                            </div>
                            
                        {/* </Link> */}
                    </div>
                )}
            </div>
        )
    }
}