let arr=
["jasbir singh","sumit malik","rajnesh kumar","jitendra punia"];
function given(fulnam){
let nameeArray=fulnam.split(" ");
let firstAr=nameeArray[0].charAt(0);
let secelem= nameeArray[1].charAt(0);
console.log(firstAr+secelem);
}

let initail=arr.map(given);
console.log(initail);



