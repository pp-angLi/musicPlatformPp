import React, { Component } from 'react';

import FriendsBroadcastList from './FriendsBroadcastList';

class FriendsBroadcast extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date:new Date().toLocaleString()
        }
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                {this.props.location.pathname === '/friends' ? <ul className="friends_top">
                    <li><span>全部关注</span></li>
                </ul>:''}
                {this.props.location.pathname === '/friends/public' ? <div className="friends_top2">
                    <span>添加动态</span>
                </div>:''}
                <FriendsBroadcastList name="test1" time={this.state.date} pathname={this.props.location.pathname} />
            </div>
        );
    }
}

export default FriendsBroadcast;