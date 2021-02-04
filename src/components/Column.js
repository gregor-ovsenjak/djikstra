import React, { Component } from 'react'

export default class Column extends Component {
    constructor(props){
        super(props)
        this.changeColor = this.changeColor.bind(this)
        this.state = {
            class: this.props.className,
            styleOfColumns: this.props.styleOfColumns
        }
    }

    changeColor() {
        var newColor = 'blue';
        this.setState(prevState => {
            let styleOfColumns = Object.assign({}, prevState.styleOfColumns);  
            styleOfColumns.backgroundColor = newColor;                                     
            return { styleOfColumns};                          
          })
    }

    render() {
        return (
            <>
                <div  
                    className={this.state.class}
                    style= {this.state.styleOfColumns}
                    onClick = {this.changeColor} >

                </div>
            </>
        )
    }
}
