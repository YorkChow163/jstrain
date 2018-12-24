//每个函数都有一个prototype属性（当然还有一个Scope属性，包含了作用域信息）
/**
 * prototype
 *   - - -constructor：指向创造此对象的构造函数，可以通过constructor访问构造他的父函数
 *   - - -_proto_：指向创造此对象的构造函数的prototype
 *
 */
//0原型链查找
function Parent(name) {
    this.name=name
}

Parent.prototype.work=function () {
    return '木匠'
}

let me = new Parent('zhouyu');
let bro = new Parent('szq');
console.log(me.name,me.work())
console.log(bro.name,bro.work())

/**
 * 继承
 */
//1.原构造函数继承:子类的示例创建使用了父类的构造函数,但是智能继承父类构造函数中声明的属性和方法，不能继承父类原型的属性和方法
function Parent1() {
    this.name='zhou'
    this.play = [1, 2, 3];
}
Parent1.prototype.familyword=function(){
    console.log('zuzongyixun')
}

function  Child1() {
    Parent1.call(this)
    this.secondname='yu'
}

let child1 = new Child1();
let child3 = new Child1();
child1.play.push(5)

console.log(child1.familyword,child1.play,child3.play)//undefined,不能继承父类原型中声明的方法和属性
console.log(child1.name,child1.secondname,child1.play,child3.play)

//2.使用原型链继承,子类的原型指向父类的构造函数,但是继承的原型对象是公共的，子类修改属性，另外一个子类也会修改
function Parent2() {
    this.firstName='sheng'
    this.play = [1, 2, 3];
}
function Child2() {
   this.secondname='zuqin'
}
Child2.prototype=new Parent2()

var child2 = new Child2();
var child2Bro = new Child2();
console.log(child2.firstName,child2Bro.firstName,child2.play,child2Bro.play)//sheng sheng [ 1, 2, 3 ] [ 1, 2, 3 ]
child2.play.push(4)
console.log(child2.firstName,child2Bro.firstName,child2.play,child2Bro.play)//xiaosheng sheng [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

//3.组合式继承,既可以继承原型的方法和属性，也可以有自己的属性和方法
function Parent5 () {
    this.name = 'parent5';
    this.play = [1, 2, 3];
}
Parent5.prototype.work=function () {
    console.log('干活的！！！')
}
function Child5 () {
    Parent5.call(this);
    this.type = 'child5';
}
//注意此处,用到了Object.creat(obj)方法，该方法会对传入的obj对象进行浅拷贝
//这个方法作为一个桥梁，达到父类和子类的一个隔离
Child5.prototype = Object.create(Parent5.prototype);
//修改构造函数指向
Child5.prototype.constructor = Child5

let child5 = new Child5();
let child5Bro = new Child5();
child5.work()
child5.play.push(5)
console.log(child5Bro.play)
console.log(child5.play)

/**
 * es6继承:非常人类
 */
class People {
    constructor(name,age){
        this.name=name
        this.age=age
    }
    say(){
        console.log('woshipersion')
    }
}

class zhouyu extends People{
    constructor(name,age) {
        super(name,age);
    }
    see(){
        console.log('yes ,i see')
    }
}

let zhouyu1 = new zhouyu('zhouyu',26);
zhouyu1.say()
console.log(zhouyu1)







