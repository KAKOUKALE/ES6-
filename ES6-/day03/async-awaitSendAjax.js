const { send } = require('process');

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

//ajax请求返回一个Promise
function sendAjax(url) {
    return new Promise((resolve, reject) => {
        // 创建对象
        let x = new XMLHttpRequest();
        // 初始化
        x.open('GET', url)
        // 发送
        x.send()
        // 事件绑定
        x.onreadystatechange = function () {
            if (x.readState === 4) {
                if (x.status >= 200 && x.status < 300) {
                    // 成功
                    resolve(x.response)
                } else {
                    // 失败
                    reject(x.status)
                }
            }
        }
    })
}

/* // 测试
sendAjax("http://127.0.0.1:8080").then(value => {
    console.log(value)
}, reason => {
    console.log(reason)
}) */
// async和await测试
async function main() {
    let result = await sendAjax("http://127.0.0.1:8080")
    console.log(result)
}
main()