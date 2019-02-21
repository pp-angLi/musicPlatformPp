import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import './Home.css';

import LoginLogin from './LoginLogin';
import LoginRegister from './LoginRegister';

class Login extends Component {
    constructor (props) {
        super(props);

        this.state = {
            urlWhat:'http://localhost:8888',
            urlNow: 'http://localhost:3000'
        }
    }
    componentDidMount() {
        this.handleNavBackground();
        this.handleBackground();
    }
    handleNavBackground() {
        let list = document.getElementsByClassName('head_nav_list');
        let length = list.length;
        for(var i = 0; i < length; i++) {
            list[i].style.background = '';
        }
        list[3].style.background = "rgba(0, 0, 0, .1)";
    }
    
    handleBackground() {
        let url = document.URL.split('/');
        let whichOne = url[url.length-1];
        let list = document.getElementsByClassName('log_top_list');
        let listA = document.getElementsByClassName('log_top_list_a');
        let length = list.length;
        for(var i = 0; i < length; i++) {
            list[i].style.background = '';
            listA[i].style.color = '';
        }
        switch(whichOne) {
            case 'login':
                list[0].style.background = "#4fb769";
                listA[0].style.color = 'white';
                break;
            
            case 'register':
                list[1].style.background = '#4fb769';
                listA[1].style.color = 'white';
                break;
                
            default:
                list[0].style.background = "#4fb769";
                listA[0].style.color = 'white';
                break;
        }
    }

    handleReset() {

    }
    handleForget() {

    }

    render() {
        return (
            <div className="log_box">
                <ul className="log_top" onClick = {this.handleBackground}>
                    <li className="log_top_list">
                        <Link className="log_top_list_a" to="/login">
                            登录
                        </Link>
                    </li>
                    <li className="log_top_list">
                        <Link className="log_top_list_a" to="/login/register">
                            注册
                        </Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/login" component={ LoginLogin } />
                    <Route path="/login/register" component={ LoginRegister } />
                </Switch>
            </div>

        )
    }
}

export default Login;