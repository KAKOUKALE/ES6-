<a name="UMBp7"></a>
## let变量声明
- 变量不能重复声明
- let有块级作用域
- 不存在变量提前
- 不影响作用域链
<a name="R3SDr"></a>
## const声明常量

- 一定要赋初始值
- 一般常量使用大写（潜规则）
- 常量的值不能修改
- 也具有块级作用域
- 对于数组和对象的元素修改，不算作对常量的修改
<a name="xvIGC"></a>
## 解构赋值
> ES6 允许按照一定模式从数组和对象中提取值，对变量进行赋值，这被称为解构赋值。

- 数组解构赋值
```javascript
const week = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
let [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday] = week
console.log(Monday)
console.log(Tuesday)
console.log(Wednesday)
console.log(Thursday)
console.log(Friday)
console.log(Saturday)
console.log(Sunday)
```

- 对象解构赋值
```javascript
const Leah = {
            name: 'Leah',
            age: 23,
            sayHello: function() {
                console.log('Hello!')
            }
        }
        let {name, age, sayHello} = Leah
        console.log(name)
        console.log(age)
        console.log(sayHello)
```
<a name="rW93j"></a>
## 模板字符串

1. 可以进行字符串声明
2. 内容中可以直接出现换行符
3. 变量拼接
```javascript
let name = 'Leah';
let sayHello = `Hello! My name is ${name}`;
console.log(out)  //RHF是最帅的
```
<a name="JxtgR"></a>
## 对象的简化写法
> ES6允许在大括号里面，直接写入变量和函数，作为对象的属性和方法,这样的书写更加简洁

```javascript
let name = 'Leah'
        let age = 23
        let say = function() {
            console.log('Hello!')
        }
        let people = {
            name,
            age,
            say,
            wish() {    //wish: function() {
                consoe.log('Find job')
            }
        }
```
<a name="ygiLh"></a>
## 箭头函数
> ES6允许使用箭头（=>）定义函数

1. this是静态的，this始终指向函数声明时所在作用域下的this的值
2. 不能作为构造实例化对象
3. 不能使用arguments变量
4. 简写
   1. 省略小括号，当形参有且只有一个的时候
   2. 省略花括号，当代码体只有一条语句的时候，此时return也必须省略
5. 箭头函数适合与this无关的回调，比如定时器，数组的方法回调。
6. 箭头函数不适合与this有关的回调，比如DOM元素的事件回调、对象的方法。
<a name="vCu2A"></a>
## 函数参数默认值
> ES6允许给函数参数赋值初始值

- 可以给形参赋初始值，一般位置要靠后（潜规则）
- 与解构赋值结合
<a name="jh7pn"></a>
## rest参数
> ES6引入rest参数，用于获取函数的实参，用来代替arguments

```javascript
/*  function data() {
            console.log(arguments)//对象
        }
        data('Monday', 'Tuesday', 'Wednesday',  'Thursday', 'Friday') */

        function data(...args) {
            console.log(args)//数组
        }
        data('Monday', 'Tuesday', 'Wednesday',  'Thursday', 'Friday')
```

- 当有多个形参时，rest参数必须放在参数最后
<a name="eAUd6"></a>
## 扩展运算符
> 扩展运算符是能将数组转换为逗号分隔的参数序列

```javascript
function data() {
            console.log(arguments)
        }
        let str = ['aaa', 'bbb', 'ccc']
        data(str)       //只有输出一个结果，数组
        data(...str)    //输出三个结果，等价于：data('aaa', 'bbb', 'ccc')，即参数序列
```

- 可以进行数组的合并
- 数组的克隆
- 将伪数组转换为真正的数组
<a name="QxrIg"></a>
## Symbol
> ES6引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型，是一种类似于字符串的数据类型。

```javascript
let s = Symbol('aaa')
        let m = Symbol('aaa')
        console.log(s,typeof s)     //Symbol(aaa) 'symbol'
        console.log(m,typeof m)     //Symbol(aaa) 'symbol'
        console.log(s === m)        //false

        let x = Symbol.for('emmm')
        let y = Symbol.for('emmm')
        console.log(x === y)        //true
```

- 它的值是唯一的，用来解决命名冲突的问题。
- 不能与其他数据进行运算
<a name="MZJQW"></a>
#### 给对象添加属性
```javascript
let game={
    //假如有很多代码很多变量名
}
//声明一个对象
let data={
    //Symbol保证了up和down的属性名是独一无二的，
    // 所以添加进去也不怕也不怕有属性名冲突
    up:Symbol(),//up属性的数据类型为Symbol
    down:Symbol()
};
//第一种添加方式
//把这个Symbol添加到game方法中
game[data.up]=function(){
    console.log('我会飞'); //安全的向这个对象中添加了两个方法
}
game[data.down]=function(){
    console.log('我会爬');
}
console.log(game);
//////////////////////////////////////
/ 第二种添加方式
        let day = {
            date: 'Monday',
            [Symbol('daylight')]: function() {
                console.log('daylight')
            },
            [Symbol('daynight')]: function() {
                console.log('daynight')
                
            }
        }
        console.log(day)

```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32917541/1675304720952-f7b3440a-b9b2-450b-93df-ec9518a64be2.png#averageHue=%23fdfcfa&clientId=u74cae1af-9138-4&from=paste&height=97&id=u795f3088&name=image.png&originHeight=97&originWidth=468&originalType=binary&ratio=1&rotation=0&showTitle=false&size=10178&status=done&style=none&taskId=uacd2861d-1972-43fb-aab6-2da91c4c13c&title=&width=468)
<a name="ZeKLN"></a>
## 迭代器
> 迭代器(lterator)是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署lterator接口，就可以完成遍历操作。

**原理**：创建一个指针对象，指向数据结构的起始位置，第一次调用==next（）==方法，指针自动指向数据结构第一个成员，接下来不断调用next（），指针一直往后移动，直到指向最后一个成员，没调用next（）返回一个包含value和done属性的对象

- 任何数据结构只要部署了Iterator接口，就可以使用for…of 来遍历。
- 具备iterator接口的数据类型
   - Array
   - Arguments
   - Set
   - Map
   - String
   - TypeArry
   - NodeList
- 这个接口就是对象里面的一个属性，属性的名字叫Symbol.iterator，也可以自己对结构进行布置iterator接口。
```javascript
 // 声明一个数组
        let arr  = ['Friday', 'Saturday', 'Sunday']
        /**
         * 使用for...of遍历数组
        */
       for (let v of arr) {
        console.log(v)      //打印键值
       }
       for (let v in arr) {
        console.log(v)      //打印键名
       }

       let iterator = arr[Symbol.iterator]()
       console.log(iterator)

       //调用next对象方法
       console.log(iterator.next())     //{value: 'Friday', done: false}
       console.log(iterator.next())     //{value: 'Saturday', done: false}
       console.log(iterator.next())     //{value: 'Sunday', done: false}
       console.log(iterator.next())     //{value: undefined, done: true}
```

- 工作原理
   - 先创建一个指针对象，指向当前数据结构的起始位置
   - 第一次调用对象的next方法，指针自动指向数据结构的第一个成员
   - 接下来不断调用next方法，指针一直往后移动，直到指向最后一个成员
   - 每次调用next方法就会返回一个包含value和done属性（是否完成）的对象
<a name="F9PXY"></a>
#### 手撕迭代器
```javascript
// 声明一个对象
        let date = {
            name: 'workday',
            week: ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday'],
            [Symbol.iterator]() {
                // 索引变量
                let index = 0
                return {
                    next: () => {
                        if(index < this.week.length) {
                            let result = {value: this.week[index], done: false}
                            // 下标自增
                            index++
                            return result
                        } else {
                            return {value: undefined, done: true}
                        }
                    }
                }
            }
        }
        // 遍历这个对象
        for(let v of date) {
            console.log(v)
        }
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/32917541/1675316430443-ba240cbb-c3eb-410a-8564-49f38a74f5e1.png#averageHue=%23fbfafa&clientId=u74cae1af-9138-4&from=paste&height=843&id=u71c3bf83&name=image.png&originHeight=843&originWidth=725&originalType=binary&ratio=1&rotation=0&showTitle=false&size=55945&status=done&style=none&taskId=u5f05ce51-f5f7-477a-8d29-6f11c6aab0e&title=&width=725)
<a name="bZKSX"></a>
## 生成器
> 生成器函数是ES6提供的一种异步编程解决方案，语法行为与传统函数完全不同，是一种特殊的函数

```javascript
function * gen() {      //函数名和function中间有一个 * 
            yield 'Monday';     //yield是函数代码的分隔符
            yield 'Tuesday';
            yield 'Wednesday';
            yield 'Thursday';
            yield 'Friday';
        }
        let iterator = gen()						////iterator是一个迭代器对象（有next方法）
        console.log(iterator.next())    //{value: 'Monday', done: false}
        console.log(iterator.next())    //{value: 'Tuesday', done: false}
        console.log(iterator.next())    //{value: 'Wednesday', done: false}
        console.log(iterator.next())    //{value: 'Thursday', done: false}
        console.log(iterator.next())    //{value: 'Friday', done: false}
        console.log(iterator.next())    //{value: undefined, done: true}

        console.log('***********************')
        for (let v of gen()) {
            console.log(v)
            /**
             * Monday
             * Tuesday
             * Wednesday
             * Thursday
             * Friday
            */
        }
```
<a name="vk6mi"></a>
#### 生成器函数的参数传递
```javascript
function* gen(args) {      //函数名和function中间有一个 * 
            console.log(args)
            let Monday = yield 'Monday';    //yield是函数代码的分隔符
            console.log(Monday)
            let Tuesday = yield 'Tuesday';
            console.log(Tuesday)
            let Wednesday = yield 'Wednesday';
            console.log(Wednesday)
            let Thursday = yield 'Thursday';
            console.log(Thursday)
            let Friday = yield 'Friday';
            console.log(Friday)
        }
        let iterator = gen('workday')
        iterator.next()
        iterator.next('星期一')		//next中传入的星期一将作为yield 'Monday'的返回结果
        iterator.next('星期二')		//next中传入的星期二将作为yield 'Tuesday'的返回结果
        iterator.next('星期三')
        iterator.next('星期四')
        iterator.next('星期五')
```
<a name="OtKOO"></a>
#### 实例：用生成器函数的方式解决回调地狱问题
```javascript
function one() {
            // 等待超时调用
            setTimeout(() => {
                console.log('111')
                iterator.next()
            }, 1000)
        }
        function two() {
            // 等待超时调用
            setTimeout(() => {
                console.log('222')
                iterator.next()
            }, 2000)
        }
        function three() {
            // 等待超时调用
            setTimeout(() => {
                console.log('333')
                iterator.next()
            }, 3000)
        }

        function * gen() {
            yield one()
            yield two()
            yield three()
        }

        let iterator = gen()
        iterator.next()
```

- 实例：模拟异步获取数据【解决回调地狱】
```javascript
/*
	setTimeout(() => {
     console.log(111);
     setTimeout(() => {
        console.log(222);
        setTimeout(() => {
           console.log(333);
        }, 3000);
     }, 2000);
		}, 1000);
*/

function UserData() {
            setTimeout(() => {
                let data = '用户数据'
                iterator.next(data)
            }, 1000)
        }
        function DealData() {
            setTimeout(() => {
                let data = '订单数据'
                iterator.next(data)
            }, 1000)
        }
        function GoodsData() {
            setTimeout(() => {
                let data = '商品数据'
                iterator.next(data)
            }, 1000)
        }

        function * gen() {
            let userDate = yield UserData()
            console.log(userDate)
            let dealData = yield DealData()
            console.log(dealData)
            let goodsDtata = yield GoodsData()
            console.log(goodsDtata)
        }

        let iterator = gen()
        iterator.next()
```
<a name="c5JSi"></a>
## Promise
> Promise是ES6引入的异步编程的新解决方案。语法上 Promise是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果。

```javascript
const Data = new Promise((resolve, reject) => {
            setTimeout(() => {
                let data = '数据库数据'
                // resolve(data)
                reject('Fatal')
            }, 1000)
        })

        Data.then(
            (value) => {
                console.log(value)
            }, 
            (reason) => {
                console.log(reason)
            })
```
<a name="txeNU"></a>
#### Promise封装读取文件
```javascript
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
```
<a name="Snng8"></a>
#### Promise封装AJAX请求
```javascript
const p = new Promise((resolve, reject) => {
            // 创建对象
            const xhr = new XMLHttpRequest()
            // 初始化
            xhr.open("GET", "http://www.bilibili.com")
            // 发送
            xhr.send()
            // 绑定事件，处理响应结果
            xhr.onreadystatechange = function() {
                if(xhr.readyState === 4) {
                    // 表示成功
                    resolve(xhr.response)
                } else {
                    reject(xhr.status)
                }
            }

        })
        p.then((value) => {
            console.log(value)
        }, (reason) => {
            console.log(reson)
        })
```
<a name="Y5Xgj"></a>
#### Promise.then（）方法
```javascript
      	const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Success!')
                // reject('Fatal!')
            }, 1000)
        })
        
         let result = p.then((value) => {   //then（）函数返回的实际也是一个Promise对象
            console.log(value)
            // 非 Promise 类型的属性
            /**
             * 1.当回调后，返回的是非Promise类型的属性时
             * 状态为fulfilled，then（）函数的返回值为对象的成功值
             * 如reutnr 'return value'，返回的Promise对象值为'return value'
             *如果没有返回值，是undefined
            */
            // return 'return value'
            /**
             * Promise {<pending>}
             * [[Prototype]]: Promise
             * [[PromiseState]]: "fulfilled"
             * [[PromiseResult]]: "return value"
            */

            // Promise 对象
            /**
             * 当回调后，返回的是Promise类型的对象时，
             *then（）函数的返回值为这个Promise对象的状态值
            */

            // return new Promise((resolve, reject) => {
            //     // resolve('ok')
                // reject('Defeat')
                /**
                 * Promise {<pending>}
                 * [[Prototype]]: Promise
                 * [[PromiseState]]: "rejected"
                 * [[PromiseResult]]: "Defeat"
                */
            // })

            // 抛出错误
            /**
             * 当回调后，如果抛出的异常，则then（）函数的返回值状态也是rejected
            */
            throw new Error('出错啦!')
            /**
             * Promise {<pending>}
             * [[Prototype]]: Promise
             * [[PromiseState]]: "rejected"
             * [[PromiseResult]]: Error: 出错啦! at file........
            */
        }, (reason) => {
            console.error('reason')
        })
        console.log(result)
```
<a name="gj3LX"></a>
#### 多个文件内容读取
```javascript
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
            let lyrics = '\r\n\r\n晴天歌词\r\n\r\n' 
              				 + value + 
              			  '\r\n\r\n稻香歌词\r\n\r\n' 
              			   + dataStr
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
```
<a name="hWR9A"></a>
#### Promise.catch方法
```javascript
const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                // 设置p为失败状态，并设置失败的值
                reject('出错啦！！！！')
            }, 1000)
        })
        /* p.then(value => {}, reason => {
            console.error(reason)
        }) */
        p.catch(reason => {
            console.error(reason)
        })
```
<a name="FDZTM"></a>
## 集合
<a name="o8MM2"></a>
### Set
> ES6提供了新的数据结构set(集合）。它类似于数组，但成员的值都是唯一的，集合实现了iterator接口，所以可以使用「扩展运算符』和「 for…of…』进行遍历。

- 集合的属性和方法
   - size返回集合的元素个数
   - add增加一个新元素，返回当前集合
   - delete删除元素，返回boolean值has检测集合中是否包含某个元素，返回boolean值
```javascript
let s = new Set()
        console.log(s)          //Set(0)
        console.log(typeof s)   //object

        let ss = new Set(['Friday', 'Saturday', 'Sunday'])
        // 元素个数
        console.log(ss.size)    //3
        // 添加元素
        ss.add('Goodday')       //Set(4) {'Friday', 'Saturday', 'Sunday', 'Goodday'}
        // 删除元素
        ss.delete('Goodday')    //Set(3) {'Friday', 'Saturday', 'Sunday'}
        // 检测是否含有元素
        console.log(ss.has('Friday'))   //true
        // 清空
        ss.clear()  //Set(0) {size: 0}

        console.log(ss)
```
<a name="VNKs8"></a>
#### 实践
```javascript
let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
        // 1.数组去重
        arr = [...new Set(arr)]    //[1, 2, 3, 4, 5]

        // 2.交集
        let arr2 = [4, 5, 6, 5, 4]
        /* let result = [...new Set(arr)].filter(item => {
         let ss2 = new Set(arr2)
        if (ss2.has(item)) {
            return true
        } else {
            return false
            }) */

        let result = [...new Set(arr)].filter(item => new Set(arr2).has(item))
        console.log(result) //[4, 5]

        // 3.并集
        let ss = [...new Set([...arr, ...arr2])]
        console.log(ss) //[1, 2, 3, 4, 5, 6]

        // 4.差集
        let redset = [...new Set(arr)].filter(item => !new Set(arr2).has(item))
        console.log(redset) //[1, 2, 3]
```
<a name="MhcLL"></a>
### Map
> ES6提供了Map数据结构。它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。Map也实现了iterator接口，所以可以使用『扩展运算符』和「for…of…』进行遍历。

```javascript
let m = new Map()
        m.set('name', 'Leah')
        /**
         * Map(1)
         *   [[Entries]]
         *     0: {"name" => "Leah"}
         *     size: 1
         *   [[Prototype]]: Map

        */
        m.set('Today', () => {   //Map(2) {'name' => 'Leah', 'Today' => ƒ}
            console.log('cloudy')
        })

        let key = {
            name: 'Leah'
        }
        m.set(key, [23, 'femal', '江西南昌'])

        console.log(m.size) //3
        m.delete('name')    //Map(2) {'Today' => ƒ, {…} => Array(3)}
        console.log(m.get('Today'))
        /**
         * () => {   
         *  console.log('cloudy')
         *  }
        */
       //m.clear()    //Map(0) {size: 0}
        for(let v of m) {
            console.log(v)  //(2) ['Today', ƒ]  [{…}, Array(3)]
        }
        console.log(m)
```
<a name="TSWiL"></a>
## Class
> ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

```javascript
function Phone(brand, price) {
            this.brand = brand
            this.price = price
        }
        Phone.prototype.call = function() {
            console.log('我可以打电话')
        }
        // 实例化对象
        let Vivo = new Phone('Vivo', 2399)
        Vivo.call()
        console.log(Vivo)

        // class
        class MobilePhone {
            // 构造方法 名字只能使用这个
            // constructor 定义构造函数初始化
            constructor(brand, price) {
                this.brand = brand
                this.price = price
            }
            // 方法必须使用该种语法，不能使用ES5的对象完整形式
            call() {
                console.log('我拍照还可以！')
            }
        }
        let onePlus = new MobilePhone('1+', 4999)
        onePlus.call()
        console.log(onePlus)
```
<a name="lmYGY"></a>
#### 静态成员
```javascript
class Phone {
            static name = 'phone'   //属性只属于构造类，而不属于实例
        }
        let nokia = new Phone()
        console.log(nokia.name) //undefined
```
<a name="OkCDI"></a>
#### 回顾ES5构造函数继承
```javascript
function Phone(brand, price) {
            this.brand = brand
            this.price = price
        }
        Phone.prototype.call = function() {
            console.log('我可以打电话')
        }
        function SmartPhone(brand, price, color, size) {
            Phone.call(this, brand, price)
            this.color = color
            this.size =size
        }
        // 设置子级构造函数原型
        SmartPhone.prototype = new Phone
        SmartPhone.prototype.constructor = SmartPhone

        // 声明子类方法
        SmartPhone.prototype.photo = function() {
            console.log('我可以拍照')
        }

        let boluo = new SmartPhone('菠萝', 3999, '黄色', '5.5inch')
        console.log(boluo)  
				//SmartPhone {brand: '菠萝', price: 3999, color: '黄色', size: '5.5inch'}
```
<a name="hJeRb"></a>
#### Class的类继承
```javascript
class Phone {
            constructor(brand, price) {
                this.brand = brand
                this.price = price
            }
            call() {
                console.log('我可以打电话')
            }
        }
        class SmartPhone extends Phone {
            constructor(brand, price, color, size) {
                super(brand, price) //Phone.call(this, brand, price)
                this.color = color
                this.size = size
            }
            photo() {
                console.log('我可以拍照')
            }
        }

        let chuizi = new SmartPhone('锤子', 2999, '黑色', '4.7inch')
        console.log(chuizi)
        chuizi.call()
        chuizi.photo()
```
<a name="lzHS7"></a>
#### get和set设置
```javascript
class Phone {
            get price() {
                console.log('price属性被读取了')
                return 'Hello!'
            }
            set price(value) {
                console.log('price属性被修改了')
                return value
            }
        }
        let p = new Phone()
        p.price = 12
        console.log(p.price)
```
<a name="yK2U8"></a>
## 数值扩展
```javascript
// 1.Number.EPSILON 是 JS表示的最小精度
        console.log(0.1 + 0.2)  //0.30000000000000004
        console.log(0.1 + 0.2 === 0.3)  //false
        function equal(a, b) {
            if(Math.abs(a-b) < Number.EPSILON) {
                return true
            } else {
                return false
            }
        }
        console.log(equal(0.1 + 0.2, 0.3))  //true

        // 2.二级制和八进制
        let b = 0b1010  //10
        let o = 0o777   //511
        let x = 0xff    //255
        console.log(x)

        //Number.isFinite() 检测一个数值是否为有限数

        // Number.isNaN 检测一个数值是否为 NaN

        // Number.parseInt Number.parseFloat 字符串转整数、小数

        // Number.isInterger 判断一个数是否为整数

        // Math.trunc  将数字的小数部分抹掉

        // Math.sign  判断一个数到底是正数 负数 还是零
```
<a name="cn4hj"></a>
## 对象方法扩展
```javascript
// 1.Object.is  判断两个值是否完全相等
        console.log(Object.is(0.3, 0.3))    //true
        console.log(Object.is(NaN, NaN))    //true
        console.log(NaN === NaN)            //false

        // 2.Object.assign 对象的合并
        let obj1 = {
            name: 'Leah',
            age: 23,
            gender: 'femal',
            height:'169cm'
        }
        let obj2 = {
            name: 'Mike',
            age: 23,
            gender: 'female',
            weight: '45kg'
        }
        console.log(Object.assign(obj1, obj2))
        // 都有的属性会覆盖，只有一方有点会留着
        //{name: 'Mike', age: 23, gender: 'female'}
        //{name: 'Mike', age: 23, gender: 'female', weight: '45kg'}
        // {name: 'Mike', age: 23, gender: 'female', height: '169cm', weight: '45kg'}

        // 3.Object.setPrototypeOf  设置原型对象 Object.getPrototypeOf 获取原型对象
        // Object.setPrototypeOf(school, address) 后面的对象会称为前一个对象的原型对象
        // Object.getPrototypeOf(school)  获取school的原型对象
```
<a name="brQ5u"></a>
## 模块化
<a name="e5ROt"></a>
#### 基本介绍
> 模块化是指将一个大的程序文件,拆分成许多小的文件，然后将小文件组合起来。

模块化的好处：

- 防止命名冲突
- 代码复用
- 高维护性

ES6模块化语法<br />模块功能主要有两个命令构成：export和inport

   - export命令用于规定模块的对外接口
   - inport命令用于输入其他模块提供的功能
   - 注意：在script标签中要有  type="moudle" 属性
```javascript
<script type="module">
    import * as m1 from "./src/js/m1.js";
	console.log(m1);
</script
```
暴露语法汇总

1. 统一暴露
```javascript
//统一暴露
let school = '尚硅谷';
function findjob(){
    console.log('找工作吧');
}
//export {school,findjob}
```

2. 默认暴露
```javascript
//默认暴露
export default {
    school:'ATGUIGU',
    change:function(){
        console.log('我们可以改变你')
    }
}
```
引入语法汇总

1. 通用导入方式
```javascript
import * as m1 from "./src/js/m1.js"
```

2. 解构赋值方式
```javascript
import {school,teach} from "./src/js/m1.js"
import {school as guigu,findJob} from "./src/js/m2.js"
import {default as m3 } from "./src/js/m3.js"
```

3. 简便形式（只针对默认暴露）
```javascript
import m3 from "./src/js/m3.js"
```
<a name="qXQno"></a>
#### 模块化方式2
```javascript
<script src="./src//js/app.js" type=modeule></script>
```
<a name="l5wdm"></a>
# ES7

1. Array.prototype.includes：用来检测数组中是否包含某个元素，返回布尔类型值

`console.log(mingzhu.includes('西游记'))//true`

2. 在ES7中引入指数操作符**，用来实现幂运算，功能与Math.pow结果相同
<a name="I96CU"></a>
# ES8
<a name="ZjPYz"></a>
#### async函数
> async和await两种语法结合可以让异步代码像同步代码一样

async函数：

- async函数的返回值为promise对象
- async返回的promise对象的结果值由async函数执行的返回值决定
```javascript
// async函数
        async function fn() {
            //1.如果返回的是一个非Promise的对象，
          	//则fn（）返回的结果就是成功状态的Promise对象，值为返回值
            //return 'async函数返回'  //Promise {<fulfilled>: 'async函数返回'}

            //2.如果返回的是一个Promise对象，则fn（）返回的结果与内部Promise对象的结果一致

            //3.如果返回的是抛出错误，则fn（）返回的就是失败状态的Promise对象
            //throw new Error('出错啦！！！')

        }
        let result  = fn()
        console.log(result)
```
<a name="RLX6T"></a>
#### await表达式

1. await必须放在async函数中
2. await右侧的表达式一般为promise对象
3. await可以返回的是右侧promise成功的值
4. await右侧的promise如果失败了，就会抛出异常，需要通过try…catch捕获处理
```javascript
const p = new Promise((resolve, reject) => {
            // console.log('用户数据')
            reject('出错啦！！！')
        })
        // await要放在async函数种
        async function main() {
            try {
                let result = await p
                console.log(result) //用户数据
            } catch(e) {
                console.log(e)  //出错啦！！！
            }
        }   
        main()
```
<a name="fSq8x"></a>
##### 发送AJAX请求
```javascript
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
```
<a name="TdQzE"></a>
#### ES8对象方法扩展
```javascript
const school = {
        name:'尚硅谷',
        cities:['北京','上海','深圳'],
        xueke:['前端','Java','大数据','运维']
    };

    //Object.keys 获取对象所有的键
    console.log(Object.keys(school));

    //Object.values 获取对象所有的值
    console.log(Object.values(school));

    //Object.entries 用来创建map
    console.log(Object.entries(school));
    console.log(new Map(Object.entries(school)))

    //Object.getOwnPropertyDescriptor 对象属性的描述对象
    console.log(Object.getOwnPropertyDescriptor(school))
    
    const obj = Object.create(null,{
        name:{
            value:'尚硅谷',
            //属性特性
            writable:true,
            configurable:true,
            enumerable:true,
        }
    })
```
<a name="ABDWj"></a>
# ES9
<a name="CmcQV"></a>
#### 运算扩展符与rest参数
```javascript
function connect({host,port,...user}){
        console.log(host);
        console.log(port);
        console.log(user)
    }
    connect({
        host:'127.0.0.1',
        port:3306,
        username:'root',
        password:'root',
        type:'master'
    })  //127.0.0.1  3306  {username: "root", password: "root", type: "master"}

const AA={
        username:'ran'
    }
    const BB={
        password:'lyyrhf'
    }
    const CC={
        job:'Java'
    }
    const D={...AA,...BB,...CC};
    console.log(D) //{username: "ran", password: "lyyrhf", job: "Java"}
```
<a name="QY4w6"></a>
# ES10
<a name="EazYR"></a>
#### 对象扩展方法
```javascript
// Object.fromEntries将二维数组或Map转换为对象
// Object.entries 将对象转换成二维数组  ES8

//二维数组
   const res = Object.fromEntries([
       ['name','RHF'],
       ['cities','成都','武汉']
   ])
   console.log(res) //{name: "RHF", cities: "成都"}

   //Map
   const m = new Map();
   m.set('name','ranhaifeng')
   const result = Object.fromEntries(m)
   console.log(result); //{name: "ranhaifeng"}
```
<a name="Vvnyt"></a>
#### 字符串扩展方法
```javascript
//trim ES5 清楚字符两端空格字符
   let str= ' asd  '
   console.log(str) //asd
   console.log(str.trimStart()) //asd  清空头空格
   console.log(str.trimEnd()) //  asd  清空尾空格
```
<a name="r5drv"></a>
#### flat与flatMap
```javascript
const arr = [1,2,3,[4,5,6,[7,8,9]]]
    //参数为深度，是一个数字
    console.log(arr.flat(2)) //[1,2,3,4,5,6,7,8,9]
		//官方解释：该方法会按照一个可指定的深度递归遍历数组，
		//并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
		//口水话解释：数组降维操作

	const arr2=[1,2,3,4]
    const result = arr2.flatmap(item => [item * 10]);
// 官方解释：flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。
// 它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
		//如果map的结果是一个多维数组可以进行flat 是两个操作的结合
```
<a name="RFb3x"></a>
#### Symbol的description
> 用来获取Symbol的字符串描述

```javascript
let s = Symbol('尚硅谷');
console.log(s.description) //尚硅谷
```
<a name="xwjvK"></a>
#### 私有属性
```javascript
class Person {
        //公有属性
        name;
        //私有属性
        #age;
        #weight;

        //构造方法
        constructor(name, age, weight) {
            this.name = name;
            this.#age = age;
            this.#weight = weight;
        }
        intro(){
            console.log(this.name);
            console.log(this.#age);
            console.log(this.#weight);
        }
    }

    //实例化
    const girl = new Person('陈', 18, '45kg');
    console.log(girl.#age) //error
    console.log(girl); //Person{name: "陈", #age: 18, #weight: "45kg"}
    girl.intro(); // 陈 18  45kg
```
<a name="VHHBu"></a>
#### Promise.allSettled
```javascript
//声明两个promise对象
    const p1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('商品数据-1')
        },1000)
    })

    const p2 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject('出错了！')
        },1000)
    })

    //调用allsettled方法:返回的结果始终是一个成功的，并且异步任务的结果和状态都存在
    const res = Promise.allSettled([p1,p2]);
    console.log(res)

    // Promise {<pending>}
    //     __proto__: Promise
    //     [[PromiseState]]: "fulfilled"
    //     [[PromiseResult]]: Array(2)

    //调用all方法：返回的结果是按照p1、p2的状态来的，
		//如果都成功，则成功，如果一个失败，则失败，失败的结果是失败的Promise的结果
    const result = Promise.all([p1,p2])
    console.log(result)
```
<a name="kB0Zc"></a>
#### 可选链操作符
```javascript
//相当于一个判断符，如果前面的有，就进入下一层级
function main(config){
    const dbHost = config?.db?.host
    console.log(dbHost) //192.168.1.100
}

main({
    db:{
        host:'192.168.1.100',
        username:'root'
    },
    cache：{
    	host:'192.168.1.200',
    	username:'admin'
	}
})
```
<a name="Q5Gi2"></a>
#### 动态import
```javascript
btn.onclick = function(){
    //使用之前并未引入，动态引入，返回的其实是一个Promise对象
    import('./hello.js').then(module=>{
        module.hello();
    })
}
```
<a name="AhNaf"></a>
#### BigInt类型
```javascript
//大整型
let n = 521n;
console.log(n,typeof(n))  // 521n  n 

//函数
let n = 123;
console.log(BigInt(n)) // 123n  //不要使用浮点型，只能用int

//大数值运算
let max = Number.MAX_SAFE_INTEGER; // 9007199254740991
console.log(max +1) // 9007199254740992
console.log(max +2) // 9007199254740992 出问题了
console.log(BigInt(max)+BigInt(1)) 9007199254740992n
console.log(BigInt(max)+BigInt(2)) 9007199254740993n
```
<a name="Wwgwi"></a>
#### 绝对全局对象globalThis
`console.log(globalThis)//window //适用于复杂环境下直接操作window`
