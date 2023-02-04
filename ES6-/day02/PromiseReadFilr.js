// 引入 fs  path 模块
const fs = require('fs')
const path = require('path')


// 使用 Promise 封装 
const p = new Promise((resolve, reject) => {
    // 调用方法读取文件
    fs.readFile(path.join(__dirname, './晴天.txt'), 'utf-8', function (err, dataStr) {
        if (err) reject(err)
        resolve(dataStr)
    })
})
p.then(
    (value) => {
        console.log(value)
    },
    (reason) => {
        console.log(reason)
    })