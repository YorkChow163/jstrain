/**
 * Set
 * @type {Set<number>}
 */
let set = new Set([1,1,1,2,3,1,4]);
console.log([...set])
set.add(6)
console.log(set)
console.log(set.has(5))
for (let key of set.keys()){
    console.log('set的值是:',key)
}

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
//并集
let setAll = new Set([...a,...b]);
console.log('并集',setAll)
//交集
let c=[...a].filter((x)=>{return b.has(x)})
console.log('交集',c)

/**
 *map
 */
let attr=[['name','zhoyu'],['age',26]]
let map = new Map();
attr.forEach(([key,value])=>{map.set(key,value)})
console.log(map)
console.log(map.get('name'))
for(let key of map.keys()){
    console.log('map的key:',key)
}
for(let value of map.values()){
    console.log('map的value:',value)
}
for(let [key,value] of map.entries()){
   console.log('key: ,value:',key,value)
}
let person={}
for(let [key,value] of map.entries()){
    person[key]=value
}
console.log('map转对象：',person)
let map1 = new Map();
for (let key of Object.keys(person)){
    map1.set(key,person[key])
}
console.log('对象转map：',map1)