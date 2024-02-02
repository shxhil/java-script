var year=2024

// if century year aneel then %400==0 , non century aneel then year %4==0
                            // or
if(year%100==0 && year%400==0 || year%100!=0 && year%4==0){
console.log("leap year");
}
else{
    console.log("not leap year");
}
