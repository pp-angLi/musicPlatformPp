import React, { Component } from 'react';

import roll from './roll2.jpg';
import FindMainHead from './FindMainHead';
import FindMainBox from './FindMainBox';

class Find extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }

    componentDidMount() {
        this.handleBackground();
    }
    
    handleBackground() {
        let list = document.getElementsByClassName('head_nav_list');
        let length = list.length;
        for(var i = 0; i < length; i++) {
            list[i].style.background = '';
        }
        list[1].style.background = "rgba(0, 0, 0, .1)";
    }
    
    render() {
        return (
            <div>
                <ul className="find_roll">
                    <li className="find_roll_photo">
                        <img height="100%"  src={roll} alt="" />
                    </li>
                </ul>

                <div className="find_main">
                    <ul className="find_main_box">
                        <li className="find_main_hot">
                            <FindMainHead name="Hot" />
                            <div>
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                            </div>
                        </li>
                        <li className="find_main_self">
                            <FindMainHead name="Self" />
                            <div>
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                            </div>
                        </li>
                        <li className="find_main_new">
                            <FindMainHead name="New" />
                            <div>
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                            </div>
                        </li>
                        <li className="find_main_list">
                            <FindMainHead name="List" />
                            <div>
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                                <FindMainBox introduction="这是第一个推荐歌单" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Find;