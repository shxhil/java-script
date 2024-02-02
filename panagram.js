var text="A quick brown fox jumps over the lazy."
var newtext=text.toLowerCase()

var aplhapabt="abcdefghijklmnopqrstuvwxyz"
//aphabet l text inddon nooknm bcz text l space ullond error varm when for loop text n kodthaaal 

var ispanagram=true

for(let ch in aplhapabt){
    if(! newtext.includes(ch)){
        ispanagram=false
        break
    }
}
console.log(ispanagram);