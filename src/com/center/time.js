import React, { Component,Fragment } from 'react'  
//icon 
import star from '../../svg/Icon feather-star.svg'

export default class Time extends Component {
    state = {
        msg1:"اختار الاختصاص اولا"
    }

    componentDidMount() {  
    }
    text = () => console.log(this.state.time)
    clear() {
            this.props.data.map(v => {
            const style = document.getElementById(v._id).style
            return(
                style.color = '#fff',
                style.backgroundColor = '#007bff'
            )
            
        })
       
    }
    render() {
        const x = this.props.data
        const s = this.state.time
        return (
            <Fragment > 
                <div className='itr ff'>
                    <div className='__'>
                        <img className='svg' src={star} alt={"star"}/>
                        <p>الاختصاصات</p>
                    </div> 
                        {x && this.props.data.map(i => {
                            return(
                                <Fragment key={i._id} >
                                    <button className='btn' id={i._id}
                                        onClick={() => {
                                            this.setState({ time: i.time,msg1:""})
                                            this.clear()
                                            const style = document.getElementById(i._id).style
                                            style.color = '#000'
                                            style.backgroundColor = '#fff'
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