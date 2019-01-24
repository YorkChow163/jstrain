/**
 * 字符串模板可以套用函数
 * @returns {string}
 */
function fun2(a) {
    if(!a){
        return 'hehehe'
    }
    return 'hahhaha';
}

let a=`foo function is ${fun2()}`
console.log(a)
