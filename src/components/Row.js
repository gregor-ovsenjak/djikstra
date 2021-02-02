import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Row extends Component {
    constructor(props){
        super(props)
        this.state = {
            columns : this.props.columns,
            class: this.props.className,
            style:this.props.style
        }
    }

    CreateCols() {
        var columns =  [];
        for (var i = 0; i< this.state.columns; i++)  {
            columns.push(<div key={i} className="border border-dark rounded" style={{height:'100%', width:100/this.state.columns+'%'}}></div>)
        }
        columns.push(<div key={i} className="w-100"></div>)
        return (columns)
    }

    render() {
        return (
            <div className={this.state.class} style={this.state.style}>
                {this.CreateCols()}
            </div>
        )
    }
}
