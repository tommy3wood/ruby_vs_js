// equality check
var x = 10;
if (x == "10") {
  console.log("equal");
} else{
  console.log("not equal");
}

// falsey values
var x = 3;
if(null){
  x++;
}

if(false){
  x++;
}

if(0){
  x++;
}

if(""){
  x++;
}
console.log(x);


// scope
var x = 100;

function addOne(num) {
  x = 1;            //running this line changes the value of the original x variable. If you wanted (x = 100) to maintain it's value, you'd need to run (var x = 1) inside the function addOne
  return num + 1;
}

console.log(x);
console.log(addOne(5));
console.log(x);


// constructors

var boat = {
  name: "S.S. Minnow",
  color: "white",
  price: 2000,
  printInfo: function() {  //first citizen syntax. treating the function as a value
    console.log("The boat " + this.name + " has a price of " + this.price)
  }
};

boat.printInfo();