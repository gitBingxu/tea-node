/*
 * @Author: Bing Xu
 * @Date: 2020-06-07 14:48:56
 * @LastEditTime: 2020-06-07 15:22:04
 * @LastEditors: Bing Xu
 * @Description: 路由入口文件
 * @FilePath: /node-practice/route/index.js
 */ 

const express = require('express')
const router = express.Router()
const Account = require('./account')

// router.use('/') 这里可以写一些中间件

// 针对账户操作的路由
router.use('/account', Account)




exports.router = router