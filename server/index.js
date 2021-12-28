/*
 * @Date: 2020-07-31 09:55:01
 * @LastEditors: wg
 * @LastEditTime: 2020-08-06 10:01:35
 * @FilePath: \node-vue-bms\server\index.js
 */ 
const express = require('express')
const app = express()

// 跨域
app.use(require('cors')())
// 解析请求体
app.use(express.json())
// 文件上传
app.use('/uploads', express.static(__dirname + '/public/uploads'))
// db
require('./src/plugins/db')(app)
// router
const adminRouter = require('./src/routers/admin/index')
app.use('/admin',adminRouter)

app.listen(3000,() => console.log('app listen on port 3000'))
