/*
 * @Date: 2020-07-31 11:41:13
 * @LastEditors: wg
 * @LastEditTime: 2020-08-03 15:31:35
 * @FilePath: \node-vue-bms\server\src\plugins\db.js
 */ 
//创建连接数据库
module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://127.0.0.1:27017/node-vue-bms', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}