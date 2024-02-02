var text="hellowWorld"

var newtext=text.toLowerCase()
var vovels="aeiou"
var v_count=0
var c_count=0
for(let ch of newtext){
    vovels.includes(ch)?v_count+=1:c_count+=1
}
console.log("vovels count",v_count);
console.log("consonents count",c_count);