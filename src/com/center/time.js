import React, { Component,Fragment } from 'react'  

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
            <div > 
                <div className='itr'>
                    <span>الاختصاصات : </span>
                    <div className='__'>
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
                    <div>
                        <table>
                            <thead>
                                 <tr>
                                    <th>اليوم</th>
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
                                                <td>{g.start}</td>
                                                <td>{g.end}</td>
                                            </tr>
                                        </Fragment>
                                    )
                                })}
                            </tbody>
                        </table> 
                    </div>
                </div>
            </div>
        )
    }
}