function printNumbersDivisibleByThree(){
  var index = 1; //instantiate variables with var
  var buttman = "fart";
  while (index <= 1000){
    if (index % 3 === 0){ //absolute equal. not equal(!==), fuzzy comparisson(5 integer == 5 string)
      console.log(buttman); //console.log == puts
    }
    index += 1
  }
}

printNumbersDivisibleByThree(); //you have to use parenthesis whether you have parameters or not

// ; defines an end of a line of executable code, you don't use it for the ends of functions, while loops, conditionals




function printEveryOtherItem(strings){
  var index = 0;
  strings.forEach(function(string){ //unnamed function
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}

printEveryOtherItem(["a", "b", "c", "d", "e"])


function computeSum(numbers){
  var sum = 0;
  numbers.forEach(function(number){
    sum += number;
  });
  return sum;
}

console.log(computeSum([2, 4, 5])); //must have return statement in function if not using console.log


var cityPopulations = {chi: 27000000};
cityPopulations["nyc"] = 84000000; //there is no such thing as a symbol in JS. You must use a string when you call a key in JS.
cityPopulations.sf = 560000; //same as cityPopulations["sf"] (dot syntax), kind of similar to reader/writer method--- .sf= is writer/ .sf is reader
console.log(cityPopulations.chi);

//hashes are called objects in JS