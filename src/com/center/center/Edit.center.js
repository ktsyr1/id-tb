import React, { Component} from 'react' 
import Axios from 'axios'
import {center } from '../../../models/config'
import edit_icon from '../../../svg/Icon feather-edit.svg'
//
export default class Edit_center extends Component {  
    constructor (props){
        super(props)
        this.state = { 
                name:'',
                tele_phone:'',
                city:'',
                address:'',
                map:'',
                special_needs:true
        }
    } 
    set_name =(e)=> this.setState({name:e.target.value}) 
    set_tele_phone=(e)=> this.setState({tele_phone:e.target.value});  
    set_city=(e)=> this.setState({city:e.target.value});  
    set_address=(e)=> this.setState({address:e.target.value});  
    set_map=(e)=> this.setState({map:e.target.value});  

    put=(e)=> {
        e.preventDefault(); 

        const token = localStorage.getItem('token')
        const config = {headers:{ "x-auth-token" : token} }
        const url = center(this.props.center._id)
        
        const data = {
            name:this.state.name,
            tele_phone:this.state.tele_phone,
            special_needs :this.state.special_needs,
            address:{
                city:this.state.city,
                address:this.state.address,
                map:this.state.map
            }
        } 

        Axios.put( url , data , config )
            .then(res => {
                console.log(res);
                this.setState({
                    name:res.data.name,
                    tele_phone:res.data.tele_phone,
                    special_needs :res.data.special_needs,
                    city:res.data.address.city,
                    address:res.data.address.address,
                    map:res.data.address.map
                })
                document.querySelector('.edit').style.display = 'none' 
                document.getElementById('open_edit').style.display = 'block' 
                window.location.reload(false)
            })
            .catch(err=> console.log(err))
    }    
    open_edit=()=>{
        this.setState({ name:this.props.center.name })   
        this.setState({ tele_phone:this.props.center.tele_phone })   
        this.setState({ city:this.props.center.address.city })   
        this.setState({ address:this.props.center.address.address })   
        this.setState({ map:this.props.center.address.map })   
        console.log(this.state)
        document.querySelector('.edit').style.display = 'grid' 
        document.getElementById('open_edit').style.display = 'none'
        document.getElementById('Popup').style.display = 'none'
    }
    x_edit=(e)=>{ 
        e.preventDefault(); 
        document.querySelector('.edit').style.display = 'none' 
        document.getElementById('open_edit').style.display = 'block' 
    }

    txt= () =>console.log(this.state)
    render() {
        let x = this.state
        let _edit 
        if (localStorage.getItem("token")){
            if (localStorage.getItem("token").length>10){
                _edit = <div id='open_edit'>
                            <img className='svg' src={edit_icon} alt={"edit_icon"}  onClick={this.open_edit} /> 
                        </div>
            }
        } 
        return (
            <>
                {_edit}

                <div className='view edit'onChange={this.txt} onLoad={this.data} > 
                    <form className='forms add_center'  onClick={this.data}>
                        <p>اظافة مركز طبي </p>
                        <label>
                            <div>
                                <p> اسم المركز</p>
                                <input type="text" name="name" value={x && x.name}  onChange={this.set_name}/>
                            </div>
                            <div>
                                <p>رقم الهاتف </p>
                                <input type="number" name="tele_phone" value={x && x.tele_phone} onChange={this.set_tele_phone}/>
                            </div>
                            {/* <div>
                                <p>كلمة السر</p>
                                <input type="radio" id="vehicle1" name="vehicle1" defaultValue='يوجد'/>
                                <input type="radio" id="vehicle1" name="vehicle1" defaultValue='لا يوجد'/>
                            </div> */}
                            <div>
                                <p>المدينة</p>
                                <input type="text" name="city" value={x && x.city} onChange={this.set_city}/>
                            </div>
                            <div>
                                <p>العنوان</p>
                                <input type="text" name="address" value={x && x.address} onChange={this.set_address}/>
                            </div>
                            <div>
                                <p> العنوان على الخريطة  </p>
                                <textarea type="text" name="map" defaultValue={x && x.map} onChange={this.set_map}/>
                            </div>
                        </label>
                        <div className='__'>
                            <input id="submit"  type='submit' onClick={this.x_edit} value='الغاء'  style={{backgroundColor:"#fff",color:"#000"}}/>
                            <input id="submit"  type='submit' onClick={this.put} value='اظافة المركز' />

                        </div>
                    </form>
                </div>
            </>
        )
    }
} 
