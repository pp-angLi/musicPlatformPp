import React, { Component } from 'react';

import MineFList from './MineFList';

class MineFouce extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="mine_fouce_box">
                <h2>关注(1)</h2>
                <ul className="mine_fouce_list">
                    <MineFList name="test" news="1" fouce="1" fans="1" inscription="没啥事" stateF="未分组" />
                    <MineFList name="test" news="1" fouce="1" fans="1" inscription="没啥事" stateF="未分组" />
                    <MineFList name="test" news="1" fouce="1" fans="1" inscription="没啥事" stateF="未分组" />
                </ul>
            </div>
        );
    }
}

export default MineFouce;