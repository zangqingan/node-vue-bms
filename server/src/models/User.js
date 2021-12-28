/*
 * @Date: 2020-07-31 11:49:13
 * @LastEditors: wg
 * @LastEditTime: 2020-07-31 11:53:24
 * @FilePath: \node-vue-bms\server\src\models\User.js
 */ 
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username:{type:String},
    password:{type:String}
})

module.exports = mongoose.model('User',schema)