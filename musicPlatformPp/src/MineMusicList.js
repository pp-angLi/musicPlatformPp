import React, { Component } from 'react';
import { Icon } from 'antd';

class MineMusicList extends Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render() {
        return (
            <li>
                <p className="mine_music_number">1</p>
                <div className='mine_music_left'>
                    <p>{this.props.musicName}</p>
                    <small>{this.props.name}-{this.props.musicFrom}</small>
                </div>
                <div className="mine_music_right">
                    <Icon type="plus-circle" />
                    <Icon type="folder-add" />
                    <Icon type="message" />
                    <Icon type="share-alt" />
                    <Icon type="delete" />
                </div>
            </li>
        )
    }
}

export default MineMusicList;