import React, { Component } from 'react'
import Row from './Row.js'
import 'bootstrap/dist/css/bootstrap.min.css';

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
    onMouseDownEvent() {
        this.setState({mouseIsDown:true})
        //console.log(this.state.mouseIsDown)
    }

    onMouseUpEvent() {
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
        for (var i =0 ; i<4; i++){
            superColumns.push(<div className="col" style={{height:'100%',width:'100%'}}>{callback}</div> )
            
        }
        return superColumns;
    }
    lists() {
        let list = []
        for(var i = 0; i< 4; i++){
            list.push(<div className="row p-0 m-0" style={{height:'25%',width:'100%'}}>
                {this.CreateSuperCols(this.CreateRows())}
            </div>)
        }
    return list;
    }
    render() {
        return (<div 
            key={100} 
            id="Grid"
            onMouseDown = {this.onMouseDownEvent}
            onMouseUp = {this.onMouseUpEvent}
            className="container-md p-0 float-right"  
            style={{height:'625px',width:'650px'}}>{this.lists()}</div>)
        }
        
}


