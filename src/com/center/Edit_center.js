import React, { Component} from 'react' 
import Axios from 'axios'
import {center } from '../../models/config'
//
export default class Edit_center extends Component {  
    state = {   
    }
    componentWillMount() {  
       return this.setState({data: this.props.center })
 
    } 
    put=(e)=> {
        const token = localStorage.getItem('token') 
        e.preventDefault(); 
        Axios.put(center(this.props.data._id),this.state.data,token)
                .then(res => this.setState({ center: res.data }))
    } 
    set_name =(e)=> this.setState({name:e.target.value})
    txt= () =>console.log(this.props.center);
      
    set_tele_phone=(e)=> this.setState({tele_phone:e.target.value});    
    
    render() {
        let x = this.state  
        return (
            <div className='view edit' > 
                <form className='add_center'  >
                    <p>اظافة مركز طبي </p>
                    <label>
                        <div>
                            <p> اسم المركز</p>
                            <input type="text" name="name" value={x && x.name}  onChange={()=> console.log(this.props,x) }/>
                        </div>
                        <div>
                            <p>رقم الهاتف </p>
                            <input type="number" name="tele_phone"   />
                        </div>
                        {/* <div>
                            <p>كلمة السر</p>
                            <input type="radio" id="vehicle1" name="vehicle1" defaultValue='يوجد'/>
                            <input type="radio" id="vehicle1" name="vehicle1" defaultValue='لا يوجد'/>
                        </div> */}
                        {/* <div>
                            <p>المدينة</p>
                            <input type="text" name="city" value={x.address.city} />
                        </div>
                        <div>
                            <p>العنوان</p>
                            <input type="text" name="address" value={x.address.address} />
                        </div>
                        <div>
                            <p> العنوان على الخريطة  </p>
                            <textarea type="text" name="map" value={x.address.map} />
                        </div> */}
                    </label>
                    <input id="submit"  type='submit' onClick={this.put} defaultValue='اظافة المركز' />
                </form>
            </div>
        )
    }
} 
