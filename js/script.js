  
var addition =() => {
  var add = function(number1, number2) {
    return number1 + number2;
  };
  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var result = add(number1, number2);
  alert(result);
}
var subtraction = () => {
  var minus = function(number1, number2) {
    return number1 - number2;
  };
  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var result = minus(number1, number2);
  alert(result);
}