let adults;
let children;
function calc(adults,children){
     if(adults<0){
      adults=0;}
      if (children<0){
      children=0;
      } 
    return adults*12+children*6;
}
window.onload=function(){
    let btn=document.getElementById("btn");
     btn.onclick=function(){
    let adults=document.getElementById("adults").value;
    let children=document.getElementById("children").value;
    let price=calc(adults,children);
    alert("The price will be $"+price);
    }
}