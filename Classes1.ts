class Greeter {
  
  // property
  greeting:string;
  
  // constructor
  constructor(message:string) {
    this.greeting=message;
  }
  
  // function
  greet() {
    return 'Hello '+this.greeting;
   }
}

// instance variable intialized to get Greeter object.
let greeter=new Greeter(''World');
