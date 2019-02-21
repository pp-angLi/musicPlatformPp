import React, { Component } from 'react';

import MineMusicList from './MineMusicList';

class MineList extends Component {
    constructor(props) {
        super (props);
        this.state = {

        }
    }

    render() {
        return (
            <ul className="mine_music_list">
                <div className='mine_music_list_function'>
                    <button>编辑</button>
                    <button>新建歌单</button>
                    <button>分享</button>
                    <button>删除歌单</button>
                </div>
                <MineMusicList musicName="test-one" name="zhang" musicFrom="test" />
            </ul>
        );
    }
}

export default MineList;