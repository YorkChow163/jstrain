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