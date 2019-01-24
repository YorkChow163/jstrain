function login(ready) {
    return new Promise((resolve,reject) => {
        if(ready){
            resolve('成功了!!!')
        }else {
            reject('失败了!!!')
        }
    })
}

login(true).then((message)=>{console.log(message)}).catch(errormsg=>{console.log(errormsg)})


//promise一般放在一个函数内部使用，Promise对象含有then,catch（）方法，then()、catch()调用后返回一个Promise对象，可以链式调用
let promise1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('两秒之后执行')
    },2000)
});
promise1.then((msg)=>{
    console.log("第一个Then,date:",msg)
    //解析第一个回来的一部数据，再进行第二步
    return '3'
}).then((data)=>{
    console.log("第二个then,data:",data)
    if(data!='2'){
        return new Promise((resolve, reject) =>{
             //如果失败就抛异常
            reject('"第二个then将状态设置为rejected')
        })
    }
    return '3'
}).catch((error)=>{
    console.log('第二个then抛异常啦!msg:',error)
    return error;
}).then((msg)=>{
    console.log("第三个then,msg:",msg)
}).catch((error)=>{
    console.log("第三个then异常:",error)
})

/**
 * promise.all(args)方法:接受一个包含promise数组的参数，依次后按照顺序执行返回。只有参数里面都是fulfilled成功才会成功
 * */
let arr=[1,2,3]
let newAttr = arr.map((data)=>{
    return new Promise((resolve, reject) => {
        //业务逻辑成功
        resolve(data*3)
    })
});
Promise.all(newAttr).then((da)=>{
    console.log(da)
})


/**
 * promise.race(args):接受包含promise对象的数组，数组里面哪个promise最先返回，最终状态的就是这个promise的状态
 * @type {Promise<any>}
 */
let promise0= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('1秒之后执行')
    },1000)
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('5秒之后执行')
    },5000)
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('2秒之后执行')
    },2000)
});

Promise.race([promise0,promise2,promise3]).then(data=>{
    console.log('race data:',data)
}).catch(error=>{
    console.log('race error:',error)
})