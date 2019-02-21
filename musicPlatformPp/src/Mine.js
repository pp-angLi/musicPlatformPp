import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MineMusic from './MineMusic';

class Mine extends Component {
    constructor(props){
        super(props);
        this.state = {
            listColor : '',
            urlWhat:'http://localhost:8888',
            urlNow: 'http://localhost:3000',
        }
        this.handleWhatChioce = this.handleWhatChioce.bind(this);
    }

    componentDidMount() {
        this.handleBackground();
        this.handleWhatChioce();
        let url = this.state.urlWhat;
        fetch(url + '/my', {
            // body: JSON.stringify(data), // 发送的信息
            cache: 'no-cache', // 不缓存
            headers: {
                'content-type': 'application/json' // 接受json格式
            },
            method: 'get',
            mode: 'cors', // 跨域
            credentials: 'include' // 跨域发送cookie

        })
        .then(res => res.json())
        .then(response => {
            console.log(response);
            var name = document.getElementsByClassName('mine_top_name')[0];
            var photo = document.getElementsByClassName('mine_top_photo')[0];

            name.innerHTML = response.name;
            photo.background = url('' + response.photo + '');
        })
        .catch(error => console.log('error'));
    }

    handleBackground() {
        let list = document.getElementsByClassName('head_nav_list');
        let length = list.length;
        for(var i = 0; i < length; i++) {
            list[i].style.background = '';
        }
        list[0].style.background = "rgba(0, 0, 0, .1)";
    }

    handleWhatChioce() {
        // console.log(document.URL, document.URL.split('/')[4]);
        var fouceList = document.getElementsByClassName('mine_top_function_list');
        var whoIs = document.URL.split('/')[4];
        this.setState(prevState => ({
            listColor : whoIs
        }));
        for(let i = 0; i < fouceList.length; i++) {
            fouceList[i].childNodes[0].style.color = 'white';
        }
        switch(whoIs) {
            case 'list':
                fouceList[1].childNodes[0].style.color = 'green';
                break;
            case 'fouce': 
                fouceList[2].childNodes[0].style.color = 'green';
                break;
            case 'fans': 
                fouceList[3].childNodes[0].style.color = 'green';
                break;
            default:
                fouceList[0].childNodes[0].style.color = 'green';
                break;
        }
    }

    render() {
        return (
            <div className="mine_box">
                <div className="mine_top_background_cover"></div>
                <div className="mine_top">
                    
                    <div className="mine_top_background"></div>
                    <div className="mine_top_id">
                        <div className="mine_top_photo"></div>
                        <div className="mine_top_name">hiahia</div>
                    </div>
                    <ul className="mine_top_function">
                        <li className="mine_top_function_list" onClick={this.handleWhatChioce}>
                            <Link to="/my"><span>喜欢的</span></Link>
                        </li>
                        <li className="mine_top_function_list">
                            <span>我的歌单</span>
                            <ul className="mine_top_function_my_list" onClick={this.handleWhatChioce}>
                                <li>
                                    <Link to="/my/list/:number"><span>test1</span></Link>
                                </li>
                            </ul>
                        </li>
                        <li className="mine_top_function_list" onClick={this.handleWhatChioce}>
                            <Link to="/my/fouce"><span>关注</span></Link>
                        </li>
                        <li className="mine_top_function_list" onClick={this.handleWhatChioce}>
                            <Link to="/my/fans"><span>粉丝</span></Link>
                        </li>
                    </ul>
                </div>
                <MineMusic className="mine_bottom"></MineMusic>
            </div>
        );
    }
}

export default Mine;