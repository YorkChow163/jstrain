var a=10
//在全局声明的变量，函数内部可以访问
function func1() {
    console.log(a)
    console.log(c)
}
func1()

if(true){
    //变量提升在顺序执行
    var c=20;
}
func1()

function outter() {
   // var zh='zhouyu'
    function inner() {
        //先在内部作用域寻找
        console.log(zh)
    }
    return inner;
}
var zh='szq'
//返回内部函数
let innerFunc = outter();
innerFunc()

var nihao='zhouyu111'

function funFir() {
    console.log(nihao)
}
function funSec() {
    var nihao='zhouyu222'
    return funFir()//函数的作用域是是定义的时候出来的，不是执行的时候出来确定的。所以是'zhouyu111'
}

var funFir1 = funSec();

!function () {
    console.log("匿名函数执行！！！")
}()
