import React, { Component } from 'react'

export default class Grid extends Component {
    constructor(props){
        super(props)
        this.state = {
            rows: this.props.Nx,
            cols: this.props.Ny,

        }
    }
    render() {
        return (
            <div>
                <h1>This is a {this.state.rows} by {this.state.cols} Grid </h1>
            </div>
        )
    }
}

