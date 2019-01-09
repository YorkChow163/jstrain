/**
 * /g的匹配:匹配成功以后从下一个位置开始，只要剩余的位置有就可以,
 * /y的匹配:匹配成功以后从下一个位置开始,
 * @type {RegExp}
 */
const  REGEX1= /a/g
const  REGEX2= /a/y
//正则的匹配从2号开始
REGEX1.lastIndex=2
let  str='xayayaa'
let match = REGEX1.exec(str);

console.log('匹配成功后的位置:',match,match.index)

console.log('匹配成功下一次匹配的开始位置:',REGEX1.lastIndex)

let match2 = REGEX1.exec(str);
console.log('2次匹配:',match2)

const REGEX = /a/y;
const REGEXY = /a/gy;

let s = 'aaxa'.replace(REGEX,'-');
console.log(s)

let s2 = 'aaxa'.replace(REGEXY,'-');
console.log(s2)
