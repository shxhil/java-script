let num=123;

while(num>0){
    let digit=num%10// from 123 to 3
    console.log(digit);//3 ,2
    num=Math.floor(num/10)// 12/10=1.2 , 1
}