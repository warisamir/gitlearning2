(function(){
    let btn=document.querySelector("#my");//retrieve kar ke dena
   // let h1=document.querySelector("h1");


   let mytem=document.querySelector("#mytemplate")
   let div2=document.querySelector("#container");
   btn.addEventListener("click",function(){
   // h1.style.color="green";
   let f=prompt("enter your name");
   if(f==null){
   return;
   }
   let divfol=mytem.content.querySelector(".folder");
   let divf =document.importNode(divfol,true);
   divf.innerHTML=f;
   div2.appendChild(divf)
   alert(f);
  //  div2.innerHTML=f
  //  div2.style.border="2px solid red";
 });
// btn.addEventListener("mouseover",function(){
//    //  h1.style.color="blue";
//  });
//  btn.addEventListener("mouseout",function(){
//    //  h1.style.color="red";
//  });  
 })();///to prevent namespace pollutiion 
///to differ from multiple files thats iife is used 
