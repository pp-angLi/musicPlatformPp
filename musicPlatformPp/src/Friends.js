import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import FriendsBroadcast from './FriendsBroadcast';

class Friends extends Component {
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
        list[2].style.background = 'rgba(0, 0, 0, .1)';
    }

    render() {
        return (
            <div className="friends_box">
                <div className="friends_circle">
                    <Link to='/friends'><span className="friends_circle_span">朋友</span></Link>
                </div>
                <div className="friends_broadcast">
                    <Link to='/friends/broadcast'><span className="friends_broadcast_span">广播</span></Link>
                </div>
                <div className="friends_public">
                    <Link to='/friends/public'><span className="friends_public_span">发表</span></Link>
                </div>
                <Switch>
                    <Route exact path='/friends' component={ FriendsBroadcast } />
                    <Route exact path='/friends/broadcast' component={ FriendsBroadcast } />
                    <Route exact path='/friends/public' component={ FriendsBroadcast } />
                </Switch>
            </div>
        );
    } 
}
export default Friends;