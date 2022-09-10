let count=0;
function increment(){
    count=count+1;
    document.getElementById("count").innerText=count;
}
function reset(){
    count=0;
    document.getElementById("count").innerText=count;
    document.getElementById("display").innerText="-";
}
let disp="";
function save(){
    if(count==0) return;
    disp=disp+count.toString()+" - ";
    document.getElementById("display").innerHTML=disp;
}

