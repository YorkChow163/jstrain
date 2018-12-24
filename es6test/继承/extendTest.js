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

//1.作为对象使用，指向父类的原型对象prototype
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
        //super指向父类的原型，所以定义在父类原型（构造函数）的函数和方法是可以访问的
        console.log( super.pe())
    }
}

let b = new B();
b.getpe()
b.getp()
