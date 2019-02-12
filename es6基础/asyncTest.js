/**
 *
 * asnyc函数相比generate函数,*换成了async,yield换成了await,return直接返回的是一个promise对象
 * 只有全部await执行完毕、return，才能then()
 */
function timeOut(){
    return 'zhouyu'
}
function timeOut2(){
    return new Error('来个错误')
}
async function fun1() {
    await timeOut()
    return timeOut();
}
fun1().then((msg)=>{
    console.log(msg)
})

async function fun2() {
    await timeOut2()
    return 'ahahhaha'
}

fun2().then(msg=>{
    console.log(msg)
})
