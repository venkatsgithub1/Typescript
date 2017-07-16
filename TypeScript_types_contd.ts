// Way 1
let list:number[]=[1,2,3];
// Way 2
let list2:Array<number>=[1,2,3];

// A tuple can have variables of different types.
let tuple1:[string,number]=['hello',1];
console.log(tuple1[0]);
console.log(tuple1[0].length);
console.log(tuple1[1]);
// console.log(tuple1[1]); error.

// Enums
enum Color {Red=1, Green, Blue};
let c:Color=Color.Green;
let c1:string=Color[2];
console.log(c1);

//any
let notSure:any=4;
notSure="A String"
notSure=false;

console.log(notSure);
let list3:any=[1,'hello',false];
for (let data of list3) {
    console.log(data);
}

function warnuser():void {
    console.log("warning");
}

warnuser();

let unusable:void=undefined;

let undefined1:undefined=undefined;
let null1:null=null;
