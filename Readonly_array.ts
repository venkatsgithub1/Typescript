let a:number[]=[1,2,3,4]
let ro:ReadonlyArray<number>=a;
// ro[2]=3; error.
// a=ro; Readonly array is not assignable to number.
// ro.push(5); error.
