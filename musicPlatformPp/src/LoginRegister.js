import React, { Component } from 'react';

class LoginRegister extends Component {
    constructor (props) {
        super(props); 
        this.state = {
            urlWhat:'http://localhost:8888',
            urlNow: 'http://localhost:3000'
        };
        this.handleRegister = this.handleRegister.bind(this);
        
    }
    componentDidMount() {
        let url = this.state.urlWhat;
        fetch(url + '/register', {
            cache: 'no-cache', // 不缓存
            headers: {
                'content-type': 'application/json' // 接受json格式
            },
            method: 'get',
            mode: 'cors', // 跨域
        })
        .then(res => res.json())
        .then(response => {
            console.log(response);
            if(response === 'had') {
                // window.location = this.state.urlNow + '/my';
                window.history.go(-1);
            }
            else {

            }
        })
        .catch(error => console.log('error'));
    }


    // 上传文件
    // var formData = new FormData();
    // var fileField = document.querySelector("input[type='file']");

    // formData.append('username', 'abc123');
    // formData.append('avatar', fileField.files[0]);

    handleRegister() {
        let url = this.state.urlWhat;
        // console.log(this.state.urlWhat);
        let number = document.getElementsByName('number')[0].value; // 账号
        // console.log(document.getElementsByName[0]);
        let nlength = number.length; // 账号长度
        let ps = document.getElementsByName('password')[0].value; // 密码
        let pslength = ps.length; // 密码长度
        let ps1 = document.getElementsByName('password')[1].value; // 第二次密码
        let reg = /[^0-9A-Za-z]/;
        if(reg.test(number)) {
            alert('账号不能包含非法字符');
        }
        else if(nlength > 20 || nlength < 6) {
            alert('账号长度不符');
        }
        else if(pslength > 20 || pslength < 6) {
            alert("密码长度不符");
        }
        else if(ps1 !== ps) {
            alert('两次密码输入不同');
        }
        else {
            var data = {number: number, password: ps}
            fetch(url + '/register', {
                body: JSON.stringify(data), // 发送的信息
                cache: 'no-cache', // 不缓存
                headers: {
                    'content-type': 'application/json' // 接受json格式
                },
                method: 'post',
                mode: 'cors', // 跨域
                // credentials: 'include' // 跨域发送cookie

            })
            .then(res => res.json())
            .then(response => {
                if(response === 'had') {
                    alert('账号已经存在');
                }
                else if(response === 'success'){
                    // var thisUrl = this.state.urlNow + '/my';
                    // window.location = thisUrl;
                    window.history.go(-1);
                }
                else {
                    alert('error');
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
                        <input name='number' type='text' placeholder="账号允许6-20英文与数字的组合" />
                    </label>
                    <label>
                        <input name='password' type='password' placeholder="设定密码6-20字符串" />
                    </label>
                    <label>
                        <input name='password' type='password' placeholder="确定密码" />
                    </label>
                </div>

                <div className="log_foot">
                    <div><button onClick={ this.handleRegister }>注册</button></div>
                    <div><button type="reset">重置</button></div>
                </div>

            </div>
        )
    }
}

export default LoginRegister;