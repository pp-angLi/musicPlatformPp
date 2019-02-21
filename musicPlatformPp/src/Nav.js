import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

import my from './png/user.png';
import friends from './png/group.png';
import find from './png/compass.png';
import account from './png/account.png';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount() {
        // console.log(this.state.whoDisplay);
    }
    
    render() {
        return (
            <ul className="head_nav">
                <li className="head_nav_list">
                    <Link to="/my">
                        <i className="icon_friends">
                            <img src={my} width="100%" alt='' />
                        </i>
                        <span>我的</span>
                    </Link>
                </li>
                <li className="head_nav_list">
                    <Link to="/">
                        <i className="icon_friends">
                            <img src={find} width="100%" alt='' />
                        </i>
                        <span>发现</span>
                    </Link>
                </li>
                <li className="head_nav_list">
                    <Link to="/friends">
                        <i className="icon_friends">
                            <img src={friends} width="100%" alt='' />
                        </i>
                        <span>圈子</span>
                    </Link>
                </li>
                <li className="head_nav_list">
                    <Link to="/login">
                        <i className="icon_friends">
                            <img src={account} width="100%" alt='' />
                        </i>
                        <span>登录</span>
                    </Link>
                </li>
            </ul>
        );
    }
}

export default Nav;