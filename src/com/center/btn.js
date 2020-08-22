import React, { Component, Fragment } from 'react'
//icon
import passport from '../../svg/Icon awesome-passport.svg'
import insurance from '../../svg/Icon map-insurance-agency.svg'
import metro from '../../svg/Icon metro-profile.svg'

export default class Btn extends Component {
    state = {}

    componentDidMount() {
        const msg1 = " حدد جنسيتك اولا"
        this.setState({ document: msg1, Insurance: msg1 })
    }
    text = () => console.log(this.state)
    clear() {
        this.props.data.map(n => {
            const style = document.querySelector(`#${n.Nationality}`).style
            return(
                style.color = '#fff',
                style.backgroundColor = '#007bff'
            )
        })
    }
    render() {
        const x = this.state
        return (
            <Fragment>
                <div className='itr ff'>
                    <div className='__'>
                        <img className='svg' src={passport} alt={"passport"}/>
                        <p>الجنسية</p>
                    </div> 
                    {this.props.data && this.props.data.map(i =>
                        <Fragment key={i.Nationality}>
                            <button className='btn' id={i.Nationality} onClick={() => {
                                this.setState({ document: i.document, Insurance: i.Insurance })
                                this.clear()
                                const style = document.querySelector(`#${i.Nationality}`).style
                                style.color = '#000'
                                style.backgroundColor = '#fff'
                            }}>{i.Nationality}</button></Fragment>
                    )}
                </div>
                <table className='gn'>
                    <thead className='itr __'>
                        <tr>
                            <img className='svg' src={metro} alt={"metro"}/>
                            <img className='svg' src={insurance} alt={"insurance"}/>

                        </tr>
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
            </Fragment>
        )
    }
}