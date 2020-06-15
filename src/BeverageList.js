import React, { Component } from 'react';

class BeverageList extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <h3>Beer List</h3>
                <ul>
                    <li>{this.state.beer}</li>
                </ul>
            </div>
        )
    }
}

export default BeverageList;