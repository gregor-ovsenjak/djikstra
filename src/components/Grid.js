import React, { Component } from 'react'
import Row from './Row.js'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Grid extends Component {
    constructor(props){
        super(props)
        this.state = {
            rows: this.props.Nx,
            cols: this.props.Ny,

        }
    }
    CreateRows() {
        var rows =  [];
        for (var i = 0; i< this.state.rows; i++) { 
            rows.push(<Row key={i} className="row" style={{height:100/this.state.rows + '%'}} columns={this.state.cols}/>)
        }
        return (rows)
    }

    render() {
        return (
            <div key={100} id="Grid" className="container-fluid" style={{height:'500px',width:'500px',border:'5px black dotted'}}>
                {this.CreateRows()}
            </div>
        )
    }
}

