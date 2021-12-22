let member=[
{g: "m",ages:20,income:200},
{g:"f",ages:25,income:100},
{ g:"m",ages:20,income:70},
{  g:"f",ages:30,income:50}]

let elem=member;
elem.income*=2;
let vari=elem;


//income->less than 100-> income double using map function
function smallfunc(elem){
    let nobj=elem;
  if(nobj.income<100){
      nobj.income*=2;
  }
  return nobj;
}
let narr=member.map(smallfunc);
console.log("original",member);
console.log("aspect",narr);
//  let incomex=[200,100,70,50];
//  le telem=incomex[0];
//  elem*=2;
//  let vari=elem;
// console.log(narr);
// function incomecal(elem){
//     if(elem<100){
//         elem*=2;
//     }
//     return elem;
// }
// console.log(incomecal)


//  



