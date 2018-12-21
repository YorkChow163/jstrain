//对于构造函数,this就是new的对象
function Person() {
    this.username="zhouyu";
}
let person = new Person();
console.log(person.username)
