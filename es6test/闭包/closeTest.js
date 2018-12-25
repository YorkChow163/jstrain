/*
闭包:内部函数可以访问外部变量，但是外部不可以访问内部函数的变量，这就形成一个闭包。
    --特点：但是外部函数执行完毕之后，调用内部函数依然可以访问外部函数的变量
 */
function outter() {
    var a=0
    function inner() {
        console.log(++a)
    }
    return inner
}

let inner = outter();
inner()//1
inner()//2
inner()//3
inner()//4
