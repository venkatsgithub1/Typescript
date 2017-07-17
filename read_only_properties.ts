// keyword readonly will not allow users to change the
// value of property once it is initially assigned.

interface Point {
    readonly x:number;
    readonly y:number;
}

let p1:Point={x:10,y:20};
// p1.x=5; error.
