#!/usr/bin/env node

var http = require('http');
var urlencode = require('urlencode');
var argv = process.argv.slice(2);


var text = urlencode(argv);
if (text) {


    http.get('http://op.juhe.cn/robot/index?info=' + text + '&dtype=&loc=&lon=&lat=&userid=&key=9c8e285d667ae5a359e961d1fe506ad2', function (res) {
        res.setEncoding('utf8');
        res.on('data', function (data) {
            var ob = JSON.parse(data);  
            console.log(ob.result.text)
        });
    });
}else {
    console.log('I am awake,你怎么不说话')
}
