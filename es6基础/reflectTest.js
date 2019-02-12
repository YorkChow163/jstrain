/*
* 每个proxy对象拥有的方法，在reflect都有相应的方法对应，确保原有对象的行为，在从proxy扩展对应的行为
* */

let obj={

}
new Proxy(obj,{
    get(target, p, receiver) {
        return Reflect.get(target, p);
    },
    set(target, p, value, receiver) {
        return Reflect.set(target,p,value);
    },
    deleteProperty(target, p) {
        return Reflect.deleteProperty(target,p)
    },
    has(target, p) {
        return Reflect.has(target,p)
    }
})