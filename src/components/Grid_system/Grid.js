import React, { Component } from 'react'
import Row from './Row.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Grid.css'
export default class Grid extends Component {
    constructor(props){
        super(props)
        this.onMouseDownEvent = this.onMouseDownEvent.bind(this)
        this.onMouseUpEvent = this.onMouseUpEvent.bind(this)
        this.state = {
            rows: this.props.Nx,
            cols: this.props.Ny,
            mouseIsDown : false

        }
    }
    onMouseDownEvent(e) {
        e.preventDefault();
        this.setState({mouseIsDown:true})
        //console.log(this.state.mouseIsDown)
    }

    onMouseUpEvent(e) {
        e.preventDefault();
        this.setState({mouseIsDown:false})
        //console.log(this.state.mouseIsDown)
    }

    CreateRows() {
        var rows =  [];
        for (var i = 0; i< this.state.rows; i++) { 
            rows.push(<Row 
                key={i} 
                className="row" 
                style={{height:100/this.state.rows + '%'}}
                columns={this.state.cols} 
                styleOfColumns={{height:'100%', width:100/this.state.cols+'%',backgroundColor:'white'}}
                mouseIsDown = {this.state.mouseIsDown} 
             />)
        }
        return (rows)
    }
    CreateSuperCols(callback){
        let superColumns = []
        for (var i =0 ; i<1; i++){
            superColumns.push(<div className="col" style={{height:'100%',width:'100%'}}>{callback}</div> )
            
        }
        return superColumns;
    }
    lists() {
        let list = []
        for(var i = 0; i< 1; i++){
            list.push(<div className="row p-0 m-0" style={{height:'100%',width:'100%'}}>
                {this.CreateSuperCols(this.CreateRows())}
            </div>)
        }
    return list;
    }
    render() {
        return (<div 
            key={100} 
            id="Grid"
            onMouseDown = {e => this.onMouseDownEvent(e)}
            onMouseUp = {e =>  this.onMouseUpEvent(e)}
            className="container-md p-0 float-right border-10"  
            style={{height:'625px',width:'50%'}}>{this.lists()}</div>)
        }
        
}


