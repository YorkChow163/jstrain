class Parent{
    constructor(age,name){
        this.age=age;
        this.name=name;
     }

     static hello(){
        console.log('we are parent')
     }
}

class Child  extends Parent{
    say(){
        console.log('i am child')
    }
}

console.log(Object.getPrototypeOf(Child))

/**
 * super关键字详解
 */

//1.作为对象使用，指向父类的原型对象prototype,可以访问父类原型的方法和属性，但是不能访问父类实例的方法和属性
class A {
    constructor() {
        this.p=2
    }

    pe(){
        return 2
    }
}

class B extends A{
    constructor() {
        super();
    }
    getp(){
       //super指向父类的原型，所以定义在父类实例（构造函数）的函数和方法是无法访问的
        console.log( super.p)
    }
    getpe(){
        //super指向父类的原型，所以定义在父类原型的函数和方法是可以访问的
        console.log( super.pe())
    }
}

let b = new B();
b.getpe()
b.getp()

//1.1普通方法使用super调用父类的方法，this指向的是子类的实例（this永远指向调用者），父类的
class C {
    constructor() {
        this.atr=1
    }
    print(){
        console.log(this.atr)
    }
}

class D extends C{
    constructor() {
        super();
        this.atr=2;
        //super赋值，实际上是给子类的实例赋值，有意思的是，super指向父类的原型，不能访问非原型属性，但是可以给非原型属性赋值
        super.atr='zhuyu'
        console.log(  super.atr)
    }
    getthisvalue(){
        //调用父类示例的方法
        super.print()
    }
}

let d = new D();
d.getthisvalue()



