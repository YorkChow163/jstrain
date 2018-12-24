//每个函数都有一个prototype属性（当然还有一个Scope属性，包含了作用域信息）
/**
 * prototype
 *   - - -constructor：指向创造此对象的构造函数，可以通过constructor访问构造他的父函数
 *   - - -_proto_：指向创造此对象的构造函数的prototype
 *
 */
//1.继承
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

