import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Column from './Column.js'
export default class Row extends Component {
    constructor(props){
        super(props)
        this.state = {
            columns : this.props.columns,
            class: this.props.className,
            style:this.props.style,
            styleOfColumns: this.props.styleOfColumns
        }
    }

    CreateCols() {
        var columns =  [];
        for (var i = 0; i< this.state.columns; i++)  {
            columns.push(<Column 
                className="border border-dark rounded"
                styleOfColumns= {this.state.styleOfColumns}
                />)
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
