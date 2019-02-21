import React, { Component } from 'react';

import MineMusicList from './MineMusicList';

class MineLove extends Component {
    constructor(props) {
        super (props);
        this.state = {

        }
    }

    render () {
        return (
            <ul className="mine_music_list">
                <MineMusicList musicName="test-one" name="zhang" musicFrom="test" />
            </ul>
        );
    }
}

export default MineLove;