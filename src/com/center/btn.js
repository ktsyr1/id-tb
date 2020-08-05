import React, { Component, Fragment } from 'react'
// import './name.sass'
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
            <div>
                {/* الجنسية */}
                <div className='itr __'>
                    <p>الجنسية : </p>

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
                <table>
                    <thead>
                        <tr>
                            <td>الاوراق الثبوتية</td>
                            <td>{x.document}</td> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>التامين</td>
                            <td>{x.Insurance}</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        )
    }
}