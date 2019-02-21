import React, { Component } from 'react';

class FriendsBroadcastList extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    componentDidMount() {
        console.log(this.props.pathname);
    }

    render() {
        return (
            <div className="friends_list_box">
                <div className="friends_list_head">
                    <div className="friends_list_head_left"></div>
                    <div className="friends_list_head_mid">
                        <p>{this.props.name}</p>
                        <small>{this.props.time}</small>
                    </div>
                    <div className="friends_list_head_right">
                        {this.props.pathname === "/friends/public" ? <button>删除</button> : <button>关注</button>}
                        
                    </div>
                </div>
                <div className="friends_list_body">
                    <div className="friends_list_word">test</div>
                    <div className="friends_list_music"></div>
                    <ul className="friends_list_photo">
                        <li className="friends_list_photo_list2">
                            {/* <img width="100%" alt='' src={ background } /> */}
                        </li>
                        <li className="friends_list_photo_list2">
                            {/* <img width="100%" alt='' src={ background } /> */}
                        </li>
                        <li className="friends_list_photo_list2">
                            {/* <img width="100%" alt='' src={ background } /> */}
                        </li>
                        <li className="friends_list_photo_list2">
                            {/* <img width="100%" alt='' src={ background } /> */}
                        </li>
                    </ul>
                </div>
                <ul className="friends_list_foot">
                    <li><small className="friends_list_foot_word">点赞(1)</small></li><span>&nbsp;|&nbsp;</span>
                    <li><small className="friends_list_foot_word">转发(1)</small></li><span>&nbsp;|&nbsp;</span>
                    <li><small className="friends_list_foot_word">评论(1)</small></li>
                </ul>
            </div>
        );
    }
}

export default FriendsBroadcastList;