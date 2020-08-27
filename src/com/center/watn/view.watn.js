import React, { Component, Fragment } from 'react'
//icon
import passport from '../../../svg/Icon awesome-passport.svg'
import insurance from '../../../svg/Icon map-insurance-agency.svg'
import metro from '../../../svg/Icon metro-profile.svg'
import item from '../../../svg/menu_item.svg'
import Axios from 'axios'
import Alert from '../../theme/alert'
import {array} from '../../../models/config'
import Img from '../box/icon'

export default class ViewWtan extends Component {
    state = {}

    componentDidMount() {
        const msg1 = " حدد جنسيتك اولا"
        this.setState({ document: msg1, Insurance: msg1 })
    }
    text = () => console.log(this.state)
    clear() {
        this.props.data.map(n => {
            const style = document.querySelector(`#s${n._id}`).style
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
        Axios.put(array,[{_id:this.state.i},{_id:window.location.pathname.slice(8)}],config)
            .then(res => {
                this.setState({d:200})
            })
            document.querySelector('#n_item').style.display= "none"

            // .then(window.location.reload(false))
    }
    itmes = ()=>  document.querySelector('#n_item').style.display= "block"
    render() {
        let x = this.state 
        let _alert 
        if(x.d === 200 ) {
            _alert= <Alert data={`تم حذف معلومات الجنسية ${x.n}`} />
        }
        let _item ,_btn
        if (localStorage.getItem("token")){
            if (localStorage.getItem("token").length>10){
                _item =<div id='n_item' > 
                            <ul> 
                                <button>تعديل معلومات الجنسية</button>
                                <button onClick={this.de}>حذف معلومات الجنسية</button>
                            </ul>
                        </div> 
                _btn=<button className='n_item' onClick={()=>  document.querySelector('#n_item').style.display= "block"}>
                        <img className='svg '  src={item} alt={"item"}  /> 
                    </button>
            }
        } 
        return (
            <Fragment>
                {_alert}
                <div className='itr ff'>
                    <div className='__'>
                        <img className='svg' src={passport} alt={"passport"}/>
                        <p style={{width: "90%"}}>الجنسية</p>
                        {_btn}

                    </div> 
                    {_item}
                    {this.props.data && this.props.data.map(i =>
                        <Fragment key={i._id}>
                            <button className='btn' id={`s${i._id}`} onClick={() => {
                                this.setState({ document: i.document, Insurance: i.Insurance ,i:i._id, n :i.Nationality})
                                this.clear()
                                const style = document.querySelector(`#s${i._id}`).style
                                style.color = '#000'
                                style.backgroundColor = '#fff'
                                this.setState({d:201})
                                document.querySelector('.n_item').style.display = "block"
                            }}>{i.Nationality}</button></Fragment>
                    )}
                </div>
                <div className='__'>
                    <div className='h_icon'> 
                        <Img src={metro}/>
                        <img className='svg' src={insurance} alt={"insurance"}/>
                                
                    </div>
                    <table className='gn'>
                        <thead className='itr __'> 
                            <tr>
                                <td>الاوراق الثبوتية</td>
                                <td>التامين</td> 
                            </tr>
                        </thead>
                        <tbody className='itr __'>
                            <tr>
                                <td>{x.document}</td>
                                <td>{x.Insurance}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Fragment>
        )
    }
}