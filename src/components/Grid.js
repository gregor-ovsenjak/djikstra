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
            rows.push(<Row 
                key={i} className="row" 
                style={{height:100/this.state.rows + '%'}}
                columns={this.state.cols} 
                styleOfColumns={{height:'100%', width:100/this.state.cols+'%',backgroundColor:'white'}}
             />)
        }
        return (rows)
    }
    CreateSuperCols(callback){
        let superColumns = []
        for (var i =0 ; i<4; i++){
            superColumns.push(<div className="col" style={{height:'100%',width:'100%'}}>{callback}</div> )
            
        }
        return superColumns;
    }
    render() {
        let list = []
        for(var i = 0; i< 4; i++){
            list.push(<div className="row p-0 m-0" style={{height:'25%',width:'100%'}}>
                {this.CreateSuperCols(this.CreateRows())}
            </div>)
        }
        return (<div key={100} id="Grid" className="container-md p-0" style={{height:'500px',width:'500px'}}>{list}</div>)
        }
        
}


