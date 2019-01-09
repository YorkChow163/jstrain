let [a,b,c]=[1,2,3]
console.log(a,b,c)

let [e,f,g]=[1,[2,4],3]
console.log(e,f,g)

//部分解构
let [e1,[f1,],g1]=[1,[2,4],3]
console.log(e1,f1,g1)

//解构并给默认值(只有undefined有效，null不可以)
let [e2,f2=2,g2]=[1,undefined,3]
console.log(e2,f2,g2)

//解构赋值还可以用于对象
let {name,age}={name:"zhouyu",age: 26};
console.log(name,age)
//对象的解构，左边的属性值必须等于右边的
// 解构的实质：找到左边对象的对应属性，将值覆盖该属性
let {name1:aaa,age1:bbb}={name1:"zhouyu",age1: 26};
//console.log(name1,hahha)
console.log("name1",aaa)
console.log("age1",bbb)

/*
* 复杂的解构
* */
let person={
    p: ['hello',{foo:'foo'}]
};

// let {p:[helo,{foo}]}=person;
// console.log(helo,foo)
//注意，p是模式，不是变量，如果想要成为变量接受，要如下
let {p,p:[helo,{foo}]}=person;
console.log(p,helo,foo)


/*
* 嵌套解构赋值
* */
let zhouyu={
    name:'zhouyu',
    sex:'man'
}
let obj1={};
let array=[];
//将解构的name值赋值到右边obj1
({name:obj1.prop,sex:array[0]}=zhouyu)
console.log(obj1,array)

/**
 *报错:左边的foo在右边找不到对应的对象
  */
//let {foo: {bar}} = {baz: 'baz'};
let {baz: {bar1}} = {baz: 'baz'};
console.log(bar1)


let x;
({x}={x:123})

/**
 * 字符串解构赋值
 * */
let {length: len}='zhouyu'
console.log("zhouyu.length",len)

/**
 * 函数的参数解构赋值
 * */
function  fun1([h=0,j=0]) {
    console.log(h,j)
}
fun1([1,undefined])

function fun2({x=0,y=1}={}) {
    console.log(x,y)
    return [x,y]
}
fun2()
fun2({x:3,y:4})


