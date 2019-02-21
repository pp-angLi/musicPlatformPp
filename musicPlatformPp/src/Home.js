import React, { Component } from 'react';
import { Icon } from 'antd';

import Nav from './Nav';
import Main from './Main';

import './Home.css';
import headSet from './png/icon.png';
import headSet1 from './png/icon2.png';
import find from './png/magnifying-glass.png';

// import music from './PRC 巴音汗 - 80000 ! (Prod.by DROYC原声版) [mqms2]';
import music from './acane_madder - 庭園にて。.mp3';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
        this.volumeMove = this.volumeMove.bind(this);
    }

    componentDidMount() {
        this.audioLoad();
    }

    handleTime(time) {
        let min;
        let sec;
        if(time > 60) {
            min = Math.floor(time / 60);
            sec = Math.floor(time % 60);
            if(sec >= 10) {
                return min + ':' + sec;
            }
            return min + ':0' + sec;
        }
        else {
            time = Math.floor(time);
            if(time >= 10) {
                return '00:' + time;
            }
            return '00:0' + time;
        }
    }
    handleNowTime(now, end) {
        let endPro = 100 / end;
        let nowPro = 100 / now;
        let percent = endPro / nowPro;
        // console.log(percent);
        return (percent * 100).toFixed(2) + '%';
    }

    audioLoad() {
        var audio = document.getElementsByClassName('audio')[0];
        var now = document.getElementsByClassName('music_time_now')[0];
        var end = document.getElementsByClassName('music_time_end')[0];
        var musicNow = document.getElementsByClassName('music_now')[0];
        end.innerHTML = '00:00';
        now.innerHTML = '00:00';
        var timer = setInterval(() => {
            // console.log(audio.readyState);
            if(audio.readyState >= 3) {
                audio.pause();
                audio.loop = true;
                end.innerHTML = this.handleTime(audio.duration);
                // now.innerHTML = Math.floor(audio.currentTime);
                now.innerHTML = this.handleTime(audio.currentTime);
                clearInterval(timer);
            }
        }, 1000);
        setInterval(() => {
            now.innerHTML = this.handleTime(audio.currentTime);
            musicNow.style.width = this.handleNowTime(audio.currentTime, audio.duration);
        },1000)
    }

    handlePre() {

    }
    handlePlay() {
        var audio = document.getElementsByClassName('audio')[0];
        var play = document.getElementsByClassName('music_play')[0];
        var pause = document.getElementsByClassName('music_pause')[0];
        if(audio.paused) {
            audio.play();
            pause.style.display = 'inline-block';
            play.style.display = 'none';
        }
        else {
            audio.pause();
            pause.style.display = 'none';
            play.style.display = 'inline-block';
        }
    }
    handleNext() {

    }
    volumeMove() {
        console.log('start');
    }
    
    render() {
        return (
            <div className="box">
                <div className="head">
                    <div className="icon">
                        <img className="icon1" src={headSet} alt="icon" />
                        <img className="icon2" src={headSet1} alt="icon" />
                    </div>
                    <Nav />
                    <div className="head_find">
                        <div className="head_find_box">
                            <i>
                                <img alt="" width="100%" src={find} />
                            </i>
                            <input type='text' placeholder='搜索' />
                        </div>
                    </div>
                </div>

                <Main />

                {/* <footer className="foot">
                    <i><small>制作的图标例如：由Freepik从www.flaticon.com制作的图标</small></i>
                </footer> */}

                <div className="music">
                    <audio className="audio" src= { music }></audio>
                    <div className="music_sing">
                        <div className="music_function">
                            <Icon title="上一首" onClick={ this.handlePre } type="step-backward" />
                            <Icon title="开始" className="music_play" onClick={ this.handlePlay } type="caret-right" />
                            <Icon title="暂停" className="music_pause" onClick={ this.handlePlay } type="pause" />
                            <Icon title="下一首" onClick={ this.handleNext } type="step-forward" />
                        </div>
                        <div className="music_body">
                            <div className="music_body_photo"></div>
                            <div className="music_introduct">
                                <small>哪首</small>
                                <small> - </small>
                                <small>谁</small>
                            </div>
                            <div className="music_schedule">
                                <div className="music_now"></div>
                            </div>
                            <div className="music_time">
                                <small className="music_time_now">now</small>
                                <small> / </small>
                                <small className="music_time_end">end</small>
                            </div>
                        </div>
                        <div className="music_share">
                            <Icon title="分享" type="share-alt" />
                            <Icon title="添加到" type="folder-add" />
                            <Icon title="列表循环" type="reload" />
                            <Icon title="音量" type="sound" />
                            <Icon title="播放列表" type="bars" />

                            <div className="volume">
                                <div className="volume_now"></div>
                                <div className="volume_move" onMouseDown={this.volumeMove}></div>
                                <div className="volume_cover"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

