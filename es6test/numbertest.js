
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