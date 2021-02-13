import React, { Component } from 'react'


export default class Navigator extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light
                            p-3 mb-2 w-50
                             bg-secondary text-white
                             position-absolute
                             ">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" 
                                type="button" 
                                id="dropdownMenuButton" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded="false">
                            Choose algorithm
                        </button>
                        <div class="dropdown-menu" role="menu" aria-labelledby="dropdownMenuButton">
                            <button class="dropdown-item" >Dijkstra's algorithm</button>
                            <button class="dropdown-item" >Breadth-first</button>
                            <button class="dropdown-item" >A* search</button>
                        </div>
                    </div>
                    <button class="navbar-brand btn btn-light" >
                    Bootstrap
                    </button>
                    <button class="navbar-brand btn btn-light">
                    Bootstrap
                    </button>
                </nav>
            </div>
        )
    }
}
