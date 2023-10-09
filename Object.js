"use strict";

 let student ={
     name:'Nicolas',
     favoriteFood:"Salad",
    city:"Paris",
 }
 let values =Object.values(student);
 console.log(values);
 let resultBis=0;
 values.forEach((values)=> {
    resultBis+=values.length
 })
 console.log(resultBis);


/*let student={
    name:'Nicolas',
    favoriteFood:"Salad",
    city:"Paris",
}
let values=Object.values(student);
let count=values.reduce((acc,value)=>acc+value.length,0)
console.log(count);
*/