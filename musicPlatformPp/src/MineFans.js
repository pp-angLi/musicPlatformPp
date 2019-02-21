import React, { Component } from 'react';

import MineFList from './MineFList' ;

class MineFans extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <div className="mine_fouce_box">
                <h2>粉丝(1)</h2>
                <ul className="mine_fouce_list">
                    <MineFList name="test" news="1" fouce="1" fans="1" inscription="没啥事" stateF="已关注" />
                    <MineFList name="test" news="1" fouce="1" fans="1" inscription="没啥事" stateF="已关注" />
                    <MineFList name="test" news="1" fouce="1" fans="1" inscription="没啥事" stateF="已关注" />
                </ul>
            </div>
        )
    }
}

export default MineFans;