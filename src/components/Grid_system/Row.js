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
            styleOfColumns: this.props.styleOfColumns,
            mouseIsDown: this.props.mouseIsDown,
        }
        
    }

    static getDerivedStateFromProps(props, state) {
        if (props.mouseIsDown !== state.mouseIsDown) {
            console.log(props.mouseIsDown,state.mouseIsDown)
          return {
            mouseIsDown: props.mouseIsDown,
          };
        }
    
        // Return null to indicate no change to state.
        return null;
      }

    CreateCols() {
        var columns =  [];
        for (var i = 0; i< this.state.columns; i++)  {
            columns.push(<Column 
                className="border border-secondary rounded-circle"
                styleOfColumns= {this.state.styleOfColumns}
                mouseIsDown={this.state.mouseIsDown}
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
