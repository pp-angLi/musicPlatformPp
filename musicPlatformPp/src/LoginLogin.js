import React, { Component } from 'react';

class LoginLogin extends Component {
    constructor (props) {
        super(props); 
        this.state = {
            urlWhat:'http://localhost:8888',
            urlNow: 'http://localhost:3000'
        };
        this.handleLogin = this.handleLogin.bind(this);
    }
    componentDidMount() {
        let url = this.state.urlWhat;
        fetch(url + '/login', {
            cache: 'no-cache', // 不缓存
            headers: {
                'content-type': 'application/json' // 接受json格式
                
            },
            method: 'get',
            mode: 'cors', // 跨域
            credentials: 'include'
            
        })
        .then(res => res.json())
        .then(response => {
            console.log(response);
            if(response === 'had') {
                // window.location = this.state.urlNow + '/my';
                window.history.go(-1);
                // return <Link to='/my'></Link>
                // this.props.link.props.to('/my');
            }
            else {
                
            }
        })
        .catch(error => console.log('error'));
    }

    handleLogin() {
        let url = this.state.urlWhat;
        let number = document.getElementsByName('number')[0].value; // 账号
        let nlength = number.length; // 账号长度
        let ps = document.getElementsByName('password')[0].value; // 密码
        let pslength = ps.length; // 密码长度
        if(nlength > 20 || nlength < 6) {
            alert('账号长度不符');
        }
        else if(pslength > 20 || pslength < 6) {
            alert("密码长度不符");
        }
        else {
            var data = {number: number, password: ps}
            fetch(url + '/login', {
                body: JSON.stringify(data), // 发送的信息
                cache: 'no-cache', // 不缓存
                headers: {
                    'content-type': 'application/json' // 接受json格式
                },
                method: 'post',
                mode: 'cors', // 跨域
                credentials: 'include' // 跨域发送cookie

            })
            .then(res => res.json())
            .then(response => {
                console.log(response);
                if(response === 'success') {
                    // var thisUrl = this.state.urlNow + '/my';
                    // window.location = thisUrl;
                    window.history.go(-1);
                    // this.context.history.push('/my');
                    // this.props.link.props.to('/my');
                }
                else {
                    alert('账号或密码出错');
                    console.log(response, number, ps);
                }
            })
            .catch(error => console.log('error'));
            
        }
    }

    render() {
        return (
            <div>
                <div className="log_main">
                    <label>
                        <input name='number' type='text' placeholder="请输入账号" />
                    </label>
                    <label>
                        <input name='password' type='password' placeholder="请输入密码" />
                    </label>
                </div>

                <div className="log_foot" onClick={this.handleLogin}>
                    <div><button>登录</button></div>
                    <div><button type="reset">重置</button></div>
                </div>
                <div className="log_bottom">
                    <i>忘记密码</i>
                </div>

            </div>
        )
    }
}

export default LoginLogin;