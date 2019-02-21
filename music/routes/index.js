var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/music');

var userSchema = new mongoose.Schema({  // 用户表
  name: {type: String, default: '机器人'},
  number: {type: String},
  password: {type: String},
  introduct: {type: String, default: '空空如也'},
  photo: {type: String, default: '/images/photo.jpg'}
});
var user = mongoose.model('user', userSchema);  // 初始化用户表

var musicSchema = new mongoose.Schema({  // 音乐单曲表
  name: {type: String},
  time: {type: String},
  singer: {type: String},
  url: {type: String},
  album: {type: String},
  lyrics: {type: String}
});
var music = mongoose.model('music', musicSchema);  // 初始化音乐单曲

var myLoveSchema = new mongoose.Schema({  // 我喜欢的音乐表
  userId: {type: String},
  musicId: {type: String}
});
var myLove = mongoose.model('myLove', musicSchema);  // 初始化我喜欢的音乐表

var myListSchema = new mongoose.Schema({  // 我的列表
  listName: {type: String},
  listIntroduct: {type: String},
  listPhoto: {type: String},
  listLabel: {type: String},
  userId: {type: String},
  musicId: {type: String}
});
var myList = mongoose.model('myList', musicSchema);  // 初始化我的列表

var myListSongSchema = new mongoose.Schema({  // 列表包含的音乐
  ListId: {type: String},
  musicId: {type: String}
});
var myListSong = mongoose.model('myListSong', musicSchema); // 初始化列表包含的音乐

router.post('/register', function (req, res, next) { // 注册接口
  if(req.body.number === '' || req.body.number === null) {
    res.json('账号为空');
    return ;
  }
  else {
    user.findOne({ number: req.body.number }, function (err, data) { // 找唯一的账号
      if( data === '' || data === null ) {
        var newUser = new user ({
          number: req.body.number,
          password: req.body.password
        })
        newUser.save(function (err) {
          if(err) {
            res.json('error');
            return ;
          }
          else {
            req.session.regenerate(function(err) {
              if(err) {
                res.json("error2");
                return ;
              }
              req.session.loginUser = data.number;
              res.json("success");
              return ;
            })
          }
        });
      }
      else {
        res.json('had');
        return ;
      }
    })
  }
  
});
router.get('/register', function (req, res, next) { // 访问注册界面发起get请求
  if(req.session.loginUser) {
    res.json('had');
  }
  else {
    res.json('having');
  }
});

router.post('/login', function(req, res, next) { // 登录接口
  var sess = req.session;
  var userTest = user.findOne( {number: req.body.number}, function(err, data) { // 查找唯一的账号
    // console.log(req.body.number === data.number, data.password);
    if(data.number === req.body.number) {
      if(data.password !== req.body.password) {
        res.json("error1");
        return ;
      }
      else {
          if(err) {
            res.json("error2");
            return ;
          }
          req.session.loginUser = req.body.number; // 设置session
          console.log(req.session.loginUser);
          res.json('success');
          return ;
        // })
      }
    }
    else {
      res.json("error3");
    }
  })
});

router.get('/login', function(req, res, next) {  // 访问登录界面发起get请求
  if(req.session.loginUser) {
    res.json('had');
  }
  else {
    res.json('having');
  }
})

router.get('/my', function(req, res, next) { // 访问'我的'页面发起get请求
  console.log(req.session.loginUser);
  if(req.session.loginUser) {
    // res.json('had');
    let dataMyLove;
    user.findOne( { number: req.session.loginUser }, function (err, data) {
      if(err) {
        return 'error';
      }
      else {
        dataMyLove = data;
      }
    });
    myLove.findOne( {number: req.session.loginUser }, function (err, data) {
      if(err) {
        return 'error';
      }
      else {
        dataMyLove += data;
      }
    })

  }
  else {
    res.json('having');
  }
})

router.get('/logout', function(req, res, next) { // 登出
  req.session.destroy(function (err) {
    if(err) {
      res.json("退出失败");
      return ;
    }
  })
});

module.exports = router;
