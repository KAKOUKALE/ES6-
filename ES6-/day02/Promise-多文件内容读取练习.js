const fs = require('fs')
const path = require('path')

const p = new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, './晴天.txt'), 'utf-8', (err, dataStr) => {
        if(err) reject(err.message)
        resolve(dataStr)
    })
})

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, './稻香.txt'), 'utf-8', (err, dataStr) => {
            if(err) reject(err.message)
            let lyrics = '\r\n\r\n晴天歌词\r\n\r\n' + value + '\r\n\r\n稻香歌词\r\n\r\n' + dataStr
            resolve(lyrics)
        })
    })
}, reason => {
    console.log('文件读取失败！')
}).then(value => {
    fs.writeFile(path.join(__dirname, './晴天和稻香歌词.txt'), value, err => {
        if(err) return err.message
    })
},
    reason => {
        console.log('文件读取失败')
    })