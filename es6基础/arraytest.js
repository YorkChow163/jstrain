/**
 * Array.from任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换。Array.from方法会将数组的空位，转为undefined, ...也是
 */

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

let ar1 = Array.from(arrayLike);
console.log(ar1)

//Array.from还可以接受第二次参数，用于对每个元素进行处理，类似map
let ar2=Array.from(arrayLike,x=>{return x+'1'})
console.log(ar2)

let ar3=Array.from([1,null , 2,null , 3], (n) => n || 0)
console.log(ar3)

/**
 * fill函数可以填充一个数组:填充元素、起始位置、结束位置
 * */
let arra=[1,2,'k',6]
arra.fill(3,2,3)
console.log(arra)

//如果填充的的同一个对象,那么填充的都是一个对象的内存地址
let anies = new Array(3).fill([]);
anies[0].push(5)
console.log(anies)//全部是5

/**
 * entries keys values
 */
let aray=['z','h','o','u']
for (let k of aray.keys()){
    console.log(k)
}
for (let [index, elem] of aray.entries()) {
    console.log(index, elem);
}

/**
 * includes()
 * */

console.log(aray.includes('z'))
console.log(aray.includes(NaN))
console.log(aray.includes('z',-2))

/**
 * every()some():每个都符合或者至少一个符合
 * */
let flatArray=[1,2,3,4,5,6]
let b1=flatArray.every((item,index,arr)=>{
  return  item %2==0
})
let b2=flatArray.some((item,index,arr)=>{
   return  item %2==0
})

console.log(b1)
console.log(b2)

/*
const obj = {
    sex,
    zhoyume(){

    },
    class () {}
};
console.log(JSON.stringify(obj))
*/


const Person = {

    name: '张三',
    // 等同于hello: function ()...
    hello() { console.log('我的名字是', this.name); }
};

console.log(Person);


