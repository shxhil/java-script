// fact of 3=>fizz fact 5 buzz fact 15 fizzbuzz

var num=15

if (num%3==0){
    console.log("fizz");
}
else if(num%5==0){
    console.log("buzz");
}
else if(num%15==0){
    console.log("fizzbuzz");
}
else{
    console.log("not valid condition");
}