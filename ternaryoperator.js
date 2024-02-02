var num=10

//condition ?meanstrue?  :else: 
var result=num%2==0?"even":"odd"
console.log(result);

//-----------

n1=10
n2=20

var maxnum=n1>n2?"n1 is max":"n2 is max"
console.log(maxnum);
//----------

function nthdigitmax(n1,n2){
    return n1%10>n2%10?`${n1} n1 is largest`:`${n2} n2 is larger`
}

console.log(nthdigitmax(148,115));