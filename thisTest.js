//默认绑定
function foo() {
    console.log(this.a); // this指向全局对象undified
}
var a = 2;
foo();

//隐式绑定（对象直接调用）
function foo2() {
    console.log(this.b); // this指向全局对象undified
}

var obj1={
    b:'szq',
    func: foo2
}
obj1.func()
let obj1fuc=obj1.func
obj1fuc()//使用对象的引用，上下文将会丢失，直接绑定到默认的undefined

//对于构造函数,this就是new的对象
function Person() {
    this.username="zhouyu";
}
let person = new Person();
console.log(person.username)
