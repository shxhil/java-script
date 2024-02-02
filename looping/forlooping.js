for (let i=0;i<=5;i++){
    console.log(i);
}

//1800-2024

//for(let i=1800;i<=2024;i++){
  //  console.log(i);
//}

//century years
for(let i=1800;i<=2024;i++){
    if(i%100==0)
    console.log(`${i} is century year`);  
}

for(let i=1800;i<=2024;i++){
    if (i%100==0 && i%400==0 || i%100!=0 && i%4==0){
        console.log(`${i} is leap year`);
    }

}