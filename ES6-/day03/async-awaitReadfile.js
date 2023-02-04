const fs = require('fs')
const path = require('path')

function QingTian() {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, '../day02/晴天.txt'), 'utf-8', (err, data) => {
            if(err) reject(err.message)
            resolve(data)
        })
    })
}
function DaoXiang() {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, '../day02/稻香.txt'), 'utf-8', (err, data) => {
            if(err) reject(err.message)
            resolve(data)
        })
    })
}

async function Read() {
    let qingtian = await QingTian()
    console.log(qingtian)
    let daoxiang = await DaoXiang()
    console.log(daoxiang)
}
Read()