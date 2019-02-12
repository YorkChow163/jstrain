let person = {
    name: 'zhouyu',
    age: 26,
    say() {
        console.log('我是周瑜!!!')
    }
}
let handler1 = {
    /**
     * 拦截对目标对象的某个属性的读取操作:
     * @param target 目标对象
     * @param prokey 目标对象的属性名
     * @param receiver 调用读操作的所在的对象
     * @returns {*}
     */
    get: function (target, prokey, receiver) {
        if (prokey in target) {
            console.log(`读取属性${prokey}成功`)
            return target[prokey]
        } else {
            console.log('读取属性失败!!!')
        }
    },

    /**
     * 拦截对某个对象的赋值操作
     * @param target 目标对象
     * @param prokey 目标对象的属性名
     * @param value  目标对象的赋值
     * @param reveiver proxy对象本身
     */
    set: function (target, prokey, value, reveiver) {
        if (prokey in target) {
            console.log(`设置目标对象${prokey}属性值为${value}`)
            target[prokey] = value;
            //严格模式下，都要返回true不然会报错
            return true;
        } else {
            console.log(`目标对象不包含${prokey}属性`)
        }
    },

    /**
     * 拦截对目标方法的调用，call,apply方法
     * @param target  目标对象
     * @param context 目标对象是下文
     * @param args 目标对象的参数数组
     */
    apply: function (target, context, args) {
        console.log('拦截目标的方法调用')
        return 'I am the proxy';
    }
}
let proxy1 = new Proxy(person, handler1);
proxy1.name
proxy1.age = 27
proxy1.say()

/*
* 应用一：校验器
* */
function proValidate(target, validator) {
    return new Proxy(target, {
        _validator: validator,
        set(target, proName, value, receiver) {
             //只能访问自己实例的属性，不能访问继承的属性；in可以
             if(target.hasOwnProperty(proName)){
                 if(!!validator(value)){
                     console.log('验证成功')
                     return Reflect.set(target,proName,value)
                 }else {
                     throw  new Error (`属性${proName}的值${value}校验失败`)
                 }
             }else{
                 throw new Error (`属性${proName}不存在`)
             }
        }
    })
}
//定义一个人员属性校验器
const perosonValidator={
     validName(val){
         return typeof val === 'string';
     },
    validAge(){
        return typeof age === 'number' && age > 18;
    }
}
class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
        return proValidate(this,perosonValidator)
    }
}
/*let zhouyu = new Person('zhouyu',26);
zhouyu.age=27*/

/*
* 应用2：定义一个私有的属性
* */
let api={
    _apiKey:'zhouyu',
    getUsers: function(){ },
    getUser: function(userId){
    }
}
const RESTRICTED = ['_apiKey'];
new Proxy(api,{
    get(target, p, receiver) {
        if(RESTRICTED.indexOf(p)>-1){
            console.log('私有属性获取')
        }else {
            Reflect.set(target,p)
        }
    },
    set(target, p, value, receiver) {

    }
})