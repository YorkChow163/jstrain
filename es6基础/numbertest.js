
console.log(Number.isFinite(15))
console.log(Number.isFinite(''))
console.log(Number.isFinite('15'))

console.log(Number.parseFloat('151321.155121'))
console.log(Number.parseInt('151321.155121'))

//浮点数直接运算会存在误差
console.log(0.1+0.2===0.3)
function marginError(x,y) {
    return Math.abs(x - y)<Number.EPSILON*Math.pow(2,2)
}
console.log(marginError(0.1+0.2,0.3))

console.log(Math.trunc(1.325))
console.log(Number.parseInt(1.325));

console.log(Math.trunc('f212'))//NaN

//判断正负数
console.log(Math.sign(-10.015215))
console.log(Math.sign(125))

/**
 * 通常，有默认参数的应该放在最后，如果不放在最后，该位置参数忽略传参以后会报错
 * @param a
 * @param b
 * @param c
 */
let fun=function  fun1(a,b=5,c=1) {
    console.log(a,b,c);
}
// fun1(1, ,6)
console.log(fun.length)

/**
 * 默认参数可以检查参数的合法性
 */
function noPramsError() {
    throw  new  Error('没有传参数');
}

function  fun2(c,d=noPramsError()) {
      console.log(c,d)
}

fun2('zhou','yu')
try {
    fun2('zhou')
} catch (e) {
    console.log(e)
}

/**
 *  ... reset 重置和聚合
 * @param argu
 */
function fun3(...argu) {
    let sum=0;
    for (let a of argu) {
        sum+=a;
    }
    console.log('sum',sum)
}
fun3(1,2,3)

/*
箭头函数
 */
let f1=(id)=>{ return 1+id}
console.log(f1(1))

//返回一个对象,加上括号
let f2=(id)=>({id:id,name:'zhouyu'})
console.log(f2(1))

//可以使用解构函数和箭头函数一起用
let f3=({id,name})=>{ return id+name}
let person={ id: 1, name: 'zhouyu' }
console.log(f3(person))

let newArra=[1,2,3].map(x=>x*x);
console.log(newArra)

//箭头函数的this总是指向定义的时候的对象：箭头函数没有自己的this,他的this完全是外部的，所以不能当做构造函数;不能使用apply/bind/call函数绑定this
function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数，this总是指向内部对象timer
    setInterval(() => this.s1++, 1000);
    // 普通函数，this指向全局
    setInterval(function () {
        this.s2++;
    }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);

/**
 * 冒号运算符，取代appy,bind,call,左边是一个对象，右边是一个函数，调用时将函数函数的上下文变成对象
 */

let arr1=[1,2,3,4]
let arr2=[1,2,3,4]
arr1.push(...arr2)
console.log(arr1);

    
