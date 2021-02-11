import React, { Component } from 'react'

export default class Column extends Component {
    constructor(props){
        super(props)
        this.changeColor = this.changeColor.bind(this)
        this.OnMouseOverEvent = this.mouseOverHandler.bind(this)
        this.state = {
            class: this.props.className,
            styleOfColumns: this.props.styleOfColumns,
            mouseIsDown : this.props.mouseIsDown,
            isWall : false,
            isDestination: false
        }
    }
    static getDerivedStateFromProps(props, state) {
        if (props.mouseIsDown !== state.mouseIsDown) {
          return {
            mouseIsDown: props.mouseIsDown,
          };
        }
    
        // Return null to indicate no change to state.
        return null;
      }

    changeColor (color) {
        var newColor = color;
        this.setState(prevState => {
            let styleOfColumns = Object.assign({}, prevState.styleOfColumns);  
            styleOfColumns.backgroundColor = newColor;                                     
            return { styleOfColumns};                          
          })
    }
    mouseOverHandler(e){
        if(this.state.mouseIsDown){
            this.changeColor("red")
            this.setState({isWall:true},() => {
                console.log(this.state);
              });
        }
    }

    render() {
        return (
            <>
                <div  
                    className={this.state.class}
                    style= {this.state.styleOfColumns}
                    onClick = {() =>{this.setState({isDestination:true});this.changeColor("blue")}} 
                    onMouseOver ={(e) => {this.mouseOverHandler(e)}} >

                </div>
            </>
        )
    }
}
