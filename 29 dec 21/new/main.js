(function(){
 let add=document.querySelector("#add");
 let div2=document.querySelector("#container")
 let pgtem=document.querySelector("#pagetemplate");
 let fid=0;
 let folders=[]
 let fjson=localStorage.getItem("data");
 if(fjson!=null && fjson.length>0){
     folders=JSON.parse(fjson);
 }

 add.addEventListener("click",function(){
  let fn=prompt("folder name");
  if(fn==null){
      return; 
  }
  let divf=pgtem.content.querySelector(".folder");
  let divfol=document.importNode(divf,true);
  

  let divnm=divfol.querySelector("[purpose='name']");
  divnm.innerHTML=fn;
  divfol.setAttribute("fid",++fid);
  let spandel=divfol.querySelector("span[action='delete']");
   spandel.addEventListener("click",function(){
       let flag= confirm("do u want to delete the folder",+fn);
       if(flag==true){
       div2.removeChild(divfol);
       let idx=folders.findIndex(f=>f.id ==parseInt(divfol.getAttribute("fid")));
       folders.splice(idx,1);
       console.log(folders);
   }
   });
 let spanedit=divfol.querySelector("span[action='edit']");
   spanedit.addEventListener("click",function(){
       let fn= prompt("enter the new folder name");
       if(fn==null){
        return; 
    }
     
     let divnm=divfol.querySelector("[purpose='name']");
     divnm.innerHTML=fn;
   });
   div2.appendChild(divfol);
   folders.push({
       id:fid,
       name:fn
   })
   persistFol();
});
function persistFol(){
    console.log(folders);
    let fjson=JSON.stringify(folders);
    localStorage.setItem("data",fjson);
}
})();