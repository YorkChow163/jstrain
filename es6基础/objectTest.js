let zhouyu={
    name:'zhouyu',
    sex: 'man'
}

let szq={
    age:26,
    name: 'szq'
}
console.log(Object.keys(zhouyu));
/**
 * ...用于对象，可以复制合并对象，相同属性的后面后面的会覆盖前面的
 * @type {{sex: string, name: string, age: number}}
 */
let zhouyu2={...zhouyu,...szq}
console.log(zhouyu2)

/**
 * Object.is()判断两个值是否严格相等
 * @type {boolean}
 */
let b1=Object.is('zhouyu','zhouyu');//true
let b2=Object.is(+0,-0);//false
let b3=Object.is('1',1);//false
let b4='1'==1 //true
let b5=Object.is(NaN,NaN)//true
console.log(b1,b2,b3,b4,b5)

/**
 * jobject.assign(),将源对象的属性复制到目标的对象，第一个参数是目标对象(不能是null和undefined).如果存在相同的属性，将会覆盖
 * @type {{a: number}}
 */
let target={a:1}
let source1={b:2}
let source2={a:3,d:4,f:true}

Object.assign(target,source1,source2)
console.log(target)

//不是对象会被转成包装对象，但是只拷贝源对象的自身属性和可枚举属性
const v1=true;
const v2=2;
const v3='zhouyu';
let t1={}
Object.assign(t1,v1,v2,v3)//{ '0': 'z', '1': 'h', '2': 'o', '3': 'u', '4': 'y', '5': 'u' }
console.log("t1",t1)

//是浅拷贝：原对象含有对象，拷贝的是对象的地址引用
const obj1={a:{b:1}}
let obj2=Object.assign({},obj1)
console.log(obj2)
obj1.a.b=2
console.log(obj2)

/**
 * setPrototypeOf(),设置对象的原型
 */
//为对象增加属性和方法
class  Person {
   constructor(name,age){
       Object.assign(this,name,age)
   }
}
let person = new Person();
console.log(person)

let mypro={}
let per={
    x:20
}
Object.setPrototypeOf(per,mypro)
mypro.fun1=function () {
    console.log('hahahaha')
}
mypro.y=2
console.log(per.y)