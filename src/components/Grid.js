import React, { Component } from 'react'
import Row from './Row.js'

export default class Grid extends Component {
    constructor(props){
        super(props)
        this.state = {
            rows: this.props.Nx,
            cols: this.props.Ny,

        }
    }
    CreateAGrid() {
        var rows =  [];
        for (var i = 0; i< this.state.rows; i++)  {
            rows.push(<Row/>)
        }
        return (rows)
    }
    render() {
        return (
            <div id="Grid">
                {this.CreateAGrid()}
            </div>
        )
    }
}

