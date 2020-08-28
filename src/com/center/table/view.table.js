import React, { Component,Fragment } from 'react'  
//icon 
import star from '../../../svg/Icon feather-star.svg'
import item from '../../../svg/menu_item.svg'

import {table} from '../../../models/config'
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
        console.log(_id);
        
        Axios.delete(table(_id),config)
            .then(res => {
                console.log(res);
                
                if (res.status===200){
                    this.setState({d:200})
                    document.querySelector('#t_item').style.display= "none"
                    document.querySelector(`#s${this.state.i}`).style.display= "none" 
                    this.setState({ document: '', Insurance: '' ,i:''})
                }
            })
    }
    render() {
        const p = this.props.data
        const s = this.state.time
        let x = this.state 
        let _alert 
        if(x.d === 200 ) {
            _alert= <Alert data={`تم حذف معلومات الاختصاصات ${x.n}`} />
        }
        let _item ,_btn
        if (localStorage.getItem("token")){
            if (localStorage.getItem("token").length>10){
                _item =<div id='t_item' > 
                            <ul> 
                                <button>تعديل معلومات الاختصاصات</button>
                                <button onClick={this.de}>حذف معلومات الاختصاصات</button>
                            </ul>
                        </div> 
                _btn=<button className='t_item' onClick={()=>  document.querySelector('#t_item').style.display= "block"}>
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
                                            this.setState({ time: i.time,msg1:"", i:i._id , n : i.props})
                                            this.clear()
                                            const style = document.getElementById(`s${i._id}`).style
                                            style.color = '#000'
                                            style.backgroundColor = '#fff'
                                            document.querySelector('.t_item').style.display = "block"
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
                                 <tr>
                                    <th>اليوم</th>
                                    <th>الطبيب</th>
                                    <th>من</th>
                                    <th>الى</th>
                                </tr>
                            </thead>
                           <tbody>
                                <tr><td>{this.state.msg1}</td></tr>
                                {s && s.map(g=>{
                                    return(
                                        <Fragment key={g.tody}>
                                            <tr>
                                                <td>{g.tody}</td>
                                                <td>{g.doctor}</td>
                                                <td>{g.start}</td>
                                                <td>{g.end}</td>
                                            </tr>
                                        </Fragment>
                                    )
                                })}
                            </tbody>
                        </table> 
            </Fragment>
        )
    }
}