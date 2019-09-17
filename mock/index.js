const Mock = require('mockjs');//mockjs 导入依赖模块
const util = require('./util');//自定义工具模块
const bodyParser = require("body-parser");

//返回一个函数
module.exports = function(app){
    // 解析以 application/json 和 application/x-www-form-urlencoded 提交的数据
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    //监听http请求
    app.post('/users/phonecode', function (req, res) {
        //每次响应请求时读取mock data的json文件
        //util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        var json = util.getJsonFile('./phonecode.json');
        //将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json));
    });

    //登录
    app.post('/users/signup', function (req, res) {
        let { username, password } = req.body
        if(username == 'alex' && password == "123456") {
            var json = util.getJsonFile('./data/signup.json');
            res.json(Mock.mock(json));
        }else {
            res.json({code: 400, data: null})
        }
    });
}

