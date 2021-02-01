import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Row extends Component {
    constructor(props){
        super(props)
        this.state = {
            columns : this.props.columns,
        }
    }

    CreateCols() {
        var columns =  [];
        for (var i = 0; i< this.state.columns; i++)  {
            columns.push(<div key={i} className="d-inline-block border border-5 border-dark rounded position-relative" style={{height:'100%', width: 100/this.state.columns+'%', minWidth:'5px',minHeight:'20px'}}></div>)
        }
        return (columns)
    }

    render() {
        return (
            <div>
                {this.CreateCols()}
            </div>
        )
    }
}
