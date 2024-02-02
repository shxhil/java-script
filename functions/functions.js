// def

function addNumber(n1,n2){
    return n1+n2
}

console.log(addNumber(10,20));
//-----------------


function maxTwo(n1,n2){
    if (n1>n2){
        return n1
    }
    else{
        return n2
    }
}

console.log(maxTwo(10,20));
//--------------

function cube(num){
    return num**3
}
console.log(cube(3));
//--------------------

//nthdigitmax with two pairs num1,num2,last digit l maximum number
//num1=127
//num2=482
//it should return num1

function nthdigitmax(num1,num2){
    if (num1%10 > num2%10){// last digit mathram kittan
        return num1
    }
    else{
        return num2
    }
}

console.log(nthdigitmax(127,482));