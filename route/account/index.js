/*
 * @Author: Bing Xu
 * @Date: 2020-06-07 15:17:17
 * @LastEditTime: 2020-06-07 15:36:34
 * @LastEditors: Bing Xu
 * @Description: 账户管理
 * @FilePath: /node-practice/route/account/index.js
 */ 

const express = require('express')
const router = express.Router()
const controller = require('../../controller/account')

router.use('./login', controller.login)


exports.router = router