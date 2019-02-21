import React, { Component } from 'react';

import './Home.css';

class FindMainHead extends Component {
    constructor(props) { 
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="find_main_head">
                <i></i>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default FindMainHead;