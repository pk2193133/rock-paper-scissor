console.log("haha")

function ComputerPlay(){
    const values=["rock","paper","scissor"];
    const randomvalue=Math.floor(Math.random()*values.length);
console.log(values[randomvalue]);
    return values[randomvalue];
}

function result(p,c){
if(c=="rock"){
    if(p=="paper")
    return "you have won"
    else if(p=="scissor")
    return "computer has won"
    else return "yu have tied"
}
else if(c=="paper"){
    if(p=="scissor")
    return "you have won"
    else if(p=="rock")
    return "computer has won"
    else return "yu have tied"
}
else {
    if(p=="rock")
    return "you have won"
    else if(p=="paper")
    return "computer has won"
    else return "yu have tied"
}
}

function game(){
let arr=[];
let com=0;
let you=0;
let tie=0;
    for(let i=0;i<5;i++){
const playerselection=prompt("enter a value");
arr.push(result(playerselection.toLowerCase(),ComputerPlay()));
}
console.log(arr);
arr.forEach(val=>{
    if(val.includes("computer")){
        com++;
    }
    else if(val.includes("you"))
     you++;

     else tie++;
})
if(com>you){
    console.log( "computer has won");
}
else if(you>com)
console.log( "you have won");

else 
console.log( "game tied");

}

game();