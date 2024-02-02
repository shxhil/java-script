var num=153;
var original=num
 var digitCount=String(num).length
let sum=0
 while(num!=0){
    let digit=num%10
    let expo=digit**digitCount
    sum=sum+expo
    num=Math.floor(num/10)
 }
 console.log(sum==original?`${original} is armstroomg`:`${original} is not armstrong`);
