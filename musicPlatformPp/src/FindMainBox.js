import React, { Component } from 'react';

class FindMainBox extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }


    render() {
        return (
            <div className="find_main_music_box">
                <div></div>
                <span>{this.props.introduction}</span>
            </div>
        );
    }
}

export default FindMainBox;