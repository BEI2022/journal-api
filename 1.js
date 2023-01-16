class Car {  // Declare a class called Car
    constructor(brand) { // Declare a function called brand
      this.carname = brand; //Initialisation
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {  //Declare a new class as a child to inherit the function of Car
    constructor(brand, mod) {
      super(brand); //Inherited from parent functions
      this.model = mod;
    }
    show() {
      return this.present() + ', it was made in ' + this.model;
    }
  }
  
  let makes = ["Ford", "Holden", "Toyota"]  // Declare an array 
  let models = Array.from(new Array(40), (x,i) => i + 1980)// Declare an array for 40 numbers start from 1980
  
  function randomIntFromInterval(min,max) { // min and max included
      return Math.floor(Math.random()*(max-min+1)+min);// 
  }
  
  for ( let model of models) {
  
    const make = makes[randomIntFromInterval(0,makes.length-1)]
    const model = models[randomIntFromInterval(0,makes.length-1)]
  
    const mycar = new Model(make, model);
    console.log(mycar.show())
  }
  