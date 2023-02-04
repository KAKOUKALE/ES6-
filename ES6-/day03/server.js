// 导入http模块
const http = require('http')

// 创建web服务器实例
let server = http.createServer()

// 为服务器实例绑定request事件，监听客户端的请求
server.on('request', (req, res) => {
    console.log('Someone is visit our web server')
    // 向客户端发送指定内容
    let str = `You request method is ${req.mehtod}`
    res.end(str)
})

// 开启服务器
server.listen(8080, err => {
    if(err) return ('服务器打开失败')
    console.log('Server is running at http://127.0.0.1:8080')
})