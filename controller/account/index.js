/*
 * @Author: Bing Xu
 * @Date: 2020-06-07 15:27:20
 * @LastEditTime: 2020-06-07 20:13:11
 * @LastEditors: Bing Xu
 * @Description: 
 * @FilePath: /node-practice/controller/account/index.js
 */ 
const mysql = require('../../db/knex').knexProxy

async function login (req, res) {
  try {
    // do sth
    res.send({code: 0, msg: '登录成功'})
  } catch (error) {
    res.send({code: 1, msg: error.message, error})
  }
}

module.exports = {
  login
}