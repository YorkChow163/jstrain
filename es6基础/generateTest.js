/**
 * generate函数每次执行返回的是一个独立的可以迭代的对象
 * @returns {string}
 */
function* gen() {
    yield '1'
    yield '2'
    yield '3'
}
console.log(gen().next())
//for  of始终迭代都是一个对象
for (let v of gen() ) {
    console.log(v)
}

/**
 * next(args)方法：参数给generate函数的迭代当前的游标的上一个yield赋值
 * @returns {IterableIterator<*>}
 */
function* gen2() {
    //第一次：查询所有的省，渲染到页面
    let a= yield 'a';
    //第二次：点击某个省，作为next参数，查询该省份所有的市
    console.log(a)
    yield a
    //第三次:
    yield 'c'
}
let gener = gen2();
console.log(gener.next());//执行一次，返回第一次执行的结果
console.log(gener.next('zhouyu'));//例如这里可以将第一次执行的结果作为参数，进行第二次执行的

/**
 * 状态机：每运行一次，状态改变一次
 * @returns {IterableIterator<boolean>}
 */
function* state() {
    while (true){
        console.log('true')
        yield true;
        console.log('false')
        yield false;
    }
}
let sta = state();
sta.next()
sta.next()
sta.next()

function* catchEror() {
    yield 'zhouyu start'
    try {
        yield (1 / 0)
        throw new Error('generator broke!');
    } catch (e) {
    }
}
let catchEror1 = catchEror();
try {
   console.log( catchEror1.next())
} catch (e) {
    console.log(e)
}
try {
    console.log( catchEror1.next())
} catch (e) {
    console.log(e)
}




