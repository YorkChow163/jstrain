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