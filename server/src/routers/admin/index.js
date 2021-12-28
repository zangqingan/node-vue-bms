/*
 * @Date: 2020-07-31 10:30:03
 * @LastEditors: wg
 * @LastEditTime: 2020-08-03 15:04:55
 * @FilePath: \node-vue-bms\server\src\routers\admin\index.js
 */ 
const express = require('express')
const router = express.Router()

// controllers 
const {getUser} = require('../../controllers/admin/index')


router.get('/',getUser)






module.exports = router