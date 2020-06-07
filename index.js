/*
 * @Author: Bing Xu
 * @Date: 2020-06-07 14:44:08
 * @LastEditTime: 2020-06-07 20:03:15
 * @LastEditors: Bing Xu
 * @Description: api入口文件
 * @FilePath: /node-practice/index.js
 */ 

const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./route')
const config = require('./config')
const morgan = require('morgan')

const app = express()

// 解析request
app.use(bodyParser.json({limit: '256mb'}));
app.use(bodyParser.urlencoded({limit: '256mb', extended: true }));

// 设置响应头
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  next()
})
morgan.format('log', '[request] :method :url :status :response-time ms');
app.use(morgan('log'));
app.use('/api', routes.router)

app.listen(config.port)
console.log('app listen：', config.port)