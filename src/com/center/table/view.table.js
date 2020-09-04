import React, { Component,Fragment } from 'react'  
//icon 
import star from '../../../svg/Icon feather-star.svg'
import item from '../../../svg/menu_item.svg'

import {table, day} from '../../../models/config'
import Axios from 'axios'
import Alert from '../../theme/alert'


export default class ViewTable extends Component {
    state = {
        msg1:"اختار الاختصاص اولا"
    }

    componentDidMount() {  
    }
    text = () => console.log(this.state.time)
    clear() {
            this.props.data.map(v => {
            const style = document.getElementById(`s${v._id}`).style
            if (document.querySelector(`.alert`)){
                document.querySelector(`.alert`).style.display= "none"
            }
            return(
                style.color = '#fff',
                style.backgroundColor = '#007bff'
            )
        })
       
    }

    de=(e)=>{
        e.preventDefault(); 
        
        const token = localStorage.getItem('token')
        const config = {headers:{ "x-auth-token" : token} } 
        const _id = this.state.i
        
        Axios.delete(table(_id),config)
            .then(res => {
                console.log(res);
                
                if (res.status===200){
                    this.setState({d:200})
                    localStorage.setItem('table_tody_alert',`تم حذف معلومات الاختصاصات ${this.state.purview}`)
                    document.querySelector('#t_item').style.display= "none"
                    document.querySelector(`#s${this.state.i}`).style.display= "none" 
                    this.setState({ document: '', Insurance: '' ,i:''})
                }
            })
    }
    ded=(e)=>{
        const token = localStorage.getItem('token')
        const config = {headers:{ "x-auth-token" : token} } 
        const _id = this.state.i
        const _id2 = localStorage.getItem('table_tody_id')
        Axios.put(day(_id) , {_id:_id2},config)
            .then(res => {
                if (res.status===200){
                    this.setState({d:200})
                    document.querySelector('#d_item').style.display= "none"
                    document.querySelector(`#d_${localStorage.getItem('table_tody_id')}`).style.display= "none" 
                    this.setState({ document: '', Insurance: '' })
                }
            })
    }
    add_tody = ()=>{
        document.querySelector('.add_tody').style.display='block'
        document.querySelector('#t_item').style.display='none'
    }
    _b=()=>  {
        document.querySelector('#t_item').style.display= "block"
        document.querySelector('._X').style.display= "block"
    
}
    render() {
        const p = this.props.data
        const s = this.state.time
        let x = this.state 
        let _alert 
        if(x.d === 200 ) {
            _alert= <Alert data={localStorage.getItem('table_tody_alert')} />
        }
        let _item ,_btn
        if (localStorage.getItem("token")){
            if (localStorage.getItem("token").length>10){
                _item =<div id='t_item' > 
                            <ul> 
                                <button onClick={this.add_tody}>اظافة  مواعيد  الاختصاص </button>
                                {/* <button>تعديل معلومات الاختصاصات</button> */}
                                <button onClick={this.de}>حذف معلومات الاختصاصات</button>
                            </ul>
                        </div> 
                _btn=<button className='t_item' onClick={this._b}>
                        <img className='svg '  src={item} alt={"item"}  /> 
                    </button>
            }
        } 
        
        // ---------
        let _item2 ,_btn2
        if (localStorage.getItem("token")){
            if (localStorage.getItem("token").length>10){
                _item2 = <tr id='d_item' > 
                                {/* <button>تعديل معلومات موعد</button> */}
                                <td onClick={this.ded}>حذف معلومات الموعد</td>
                        </tr> 
                _btn2 = <button className='d_item' >
                            <img className='svg '  src={item} alt={"item"}  /> 
                        </button>
            }
        } 
        return (
            <Fragment > 
                {_alert}
                <div className='itr ff'>
                    <div className='__'>
                        <img className='svg' src={star} alt={"star"}/>
                        <p>الاختصاصات</p>
                        {_btn}
                    </div> 
                    {_item}
                        {p && this.props.data.map(i => {
                            return(
                                <Fragment key={i._id} >
                                    <button className='btn' id={`s${i._id}`}
                                        onClick={() => {
                                            this.setState({ time: i.time,msg1:"", i:i._id , purview : i.purview})
                                            this.clear()
                                            const style = document.getElementById(`s${i._id}`).style
                                            style.color = '#000'
                                            localStorage.setItem('_id_table',i._id)
                                            style.backgroundColor = '#fff'
                                            if (document.querySelector('.t_item')){
                                                document.querySelector('.t_item').style.display = "block"
                                            }
                                            this.setState({d:201})

                                        }}>
                                        {i.purview} 
                                    </button>
                                </Fragment>
                            )
                        })}
                    </div>
                        <table className='fullw'>
                            <thead>
                                 <tr >
                                    <th>اليوم</th>
                                    <th>الطبيب</th>
                                    <th>من</th>
                                    <th>الى</th>
                                    <th></th>
                                </tr>
                            </thead>
                           <tbody>
                                <tr><td>{this.state.msg1}</td></tr>
                                {s && s.map(g=>{
                                    return(
                                        <Fragment key={g._id}>
                                            <tr id={`d_${g._id}`}>
                                                <td>{g.tody}</td>
                                                <td>{g.doctor}</td>
                                                <td>{g.start}</td>
                                                <td>{g.end}</td>
                                                <td className='ff' onClick={()=> {
                                                    document.querySelector('#d_item').style.display= "block"
                                                    document.querySelector('._X').style.display= "block"
                                                    localStorage.setItem('table_tody_id', g._id)      
                                                    localStorage.setItem('table_tody_alert', ` تم حذف موعد اختصاص ${x.purview} يوم ${g.tody} الطبيب( ${g.doctor} ) `)

                                                }}>{_btn2}</td>
                                            </tr>
                                            {_item2}
                                        </Fragment>
                                    )
                                })}
                            </tbody>
                        </table> 
            </Fragment>
        )
    }
}