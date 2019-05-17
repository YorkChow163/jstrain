/**
 * 原理(https://www.cnblogs.com/moqiutao/p/7371988.html)
 * 1.call().apply()作用：在运行的时候动态的改变调用者的this对象
 * 2.call(this,arg1,arg2),apply(this,arguments),arguments是一个伪数组参数对象
 * 3.bind(this)返回一个函数，而前面两个是直接执行函数
 */
class Apple {
    constructor() {
        this.name = '苹果';
    }

    say() {
        console.log("我是：", this.name)
    }
}

let apple = new Apple();
apple.say()

class Banana {
    constructor() {
        this.name = '香蕉';
        this.color = '我是黄色的';
    }
}

//apple的say方法的this对象在运行的时候被替换成Banana对象
apple.say.apply(Banana)

/**
 * 应用
 *
 */

/**1.伪数组转化为数组
 * Javascript中存在一种名为伪数组的对象结构。比较特别的是 arguments 对象，还有像调用 getElementsByTagName , document.childNodes 之类的，
 * 它们返回NodeList对象都属于伪数组。不能应用 Array下的 push , pop 等方法。
 * */

// Array.prototype.slice.apply(arguments);

/**
 * 2.获取数组的最大值和最小值
 */
let  numbers = [5, 458 , 120 , -215 ];
let max = Math.max.apply(Math,numbers);
console.log("最大值是：",max)

/**
 * 3.代理模式，比如代理方法
 */


/**
 * bind应用
 * 1.改变运行时的this
 */

this.num = 9;
let mymodule = {
    num: 81,
    getNum: function() {
        console.log("num:",this.num);
    }
};

mymodule.getNum(); // 81

let getNum = mymodule.getNum;
getNum(); // 9, 因为在这个例子中，"this"指向全局对象,因为是全局对象调用了这个函数

let boundGetNum = getNum.bind(mymodule);
boundGetNum(); // 81

/**
 * 2.偏函數：给预定义一部分参数，使得函数执行的时候添加的参数都会在预定义参数后面
 */

function list() {
    return Array.prototype.slice.call(arguments);
}

// 预定义参数37
var leadingThirtysevenList = list.bind(undefined, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]
console.log(list2,list3);

/**
 * 3.setTimeout
 */