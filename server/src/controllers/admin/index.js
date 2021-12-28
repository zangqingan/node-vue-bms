/*
 * @Date: 2020-07-31 10:34:34
 * @LastEditors: wg
 * @LastEditTime: 2020-08-03 15:46:16
 * @FilePath: \node-vue-bms\server\src\controllers\admin\index.js
 */ 
// models
const User = require('../../models/User')

class Users{
    async getUser(req,res){
        const result = await User.find()
        res.send('hello user,it is a test',result)
    }

}

module.exports = new Users()