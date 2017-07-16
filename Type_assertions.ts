let somevalue:any="string";
// way 1
let somevaluelen:number=(<string>somevalue).length;
// way 2
let somevaluelen2:number=(somevalue as string).length;

console.log(somevaluelen);
console.log(somevaluelen2);
