/*
 * @Author: Bing Xu
 * @Date: 2020-06-07 20:09:10
 * @LastEditTime: 2020-06-07 20:10:56
 * @LastEditors: Bing Xu
 * @Description: 链接数据库
 * @FilePath: /node-practice/db/knex.js
 */ 

 const config = require('../config')

 exports.knexProxy = require('knex')({
   client: 'mysql',
   connection: config.db
 })