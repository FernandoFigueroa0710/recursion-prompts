/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
// create a function called factorial
var factorial = function(n) {
  // conditional statement to meet edge case
   if (n < 0){
    // if the parameter n is negative, return null;
    return null;
  }
  //and if number is equal to 0;
  if (n === 0){
    // return 1 since we are multiplying
    return 1;
  }
  // return the parameter n times the function & parameter minus 1
  return n * factorial(n -1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
// create a function named sum
var sum = function(array) {
  //if the lenght of the array is empty..
  if (array.length < 1){
    //return  cero;
    return 0;
  }
  // return the sum of the array of its integrers
  return array[0]+ sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
// write a fucntion called the sum of arrays
var arraySum = function(array) {
  // if the elements inside the function are an array
 if(Array.isArray(array[0])){
   /* return the function at the starting point on the array and add the sum
   of the elements decending 1 reinserting the array within the function*/
   return arraySum(array[0])+ arraySum(array.slice(1));
 }
 // if the array is empty
 if(array.length < 1){
   // return 0
   return 0;
 }
 /* return the starting point of the array recursing in the first spot of the
 index */
 return array[0] + arraySum(array.slice(1));
};

// 4. Check if a number is even.
// write a fucntion is even fucntion
var isEven = function(n) {
  /* if the number is equal to 0; return true (0 being an even number and also
      our stoppin point to recursing) - base case*/
  if(n === 0){
    return true;
  }
  // if the number is equal to one returns false ( 1 being an odd number)
  if (n === 1){
    return false;
  }
  // if the number is negative then multiply the function and the number by -1
  if (n < 0){
    return isEven(n * -1);
  }
  // return the function substarcting the number two; until it reaches 0;
  return isEven(n -2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
// write  a function called sum below
var sumBelow = function(n) {
  // conditional for the base case (stopping point of the function)
  if ( n === 0){
    return 0;
  }
  /* if the number is negative, return the value of number plus one since we are
  working with negative numbers, plus the functionadding one*/
  if (n < 0){
    return  (n + 1) + sumBelow(n + 1);
  }
  /* retunrn the absolute value of the fucntion substracting one number
  everytime the function runs (sucstraction since it's working with positive)*/
  return  Math.abs(n - 1) + Math.abs(sumBelow(n -1));
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
// write a function called range
var range = function(x, y) {
  // create a conditional to meet edge cases, and base case;
  if ( x === y - 1 || y === x - 1 || x === y) {
  return [];
  // if the number is negative
} else if (x > y) {
  /* create a new placeholder equals to the function with the last integrer
   adding one since we are working with newgative numbers */
  var newArr = range(x, y + 1);
  newArr.push(y + 1);
  return newArr;
// return the palceholder subtracting one from the last integrer
} else {

  newArr = range(x, y - 1);
  newArr.push(y - 1);

}
 return newArr;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // write our base case to return 1
  if ( exp === 0){
    return 1;
  }
  //if the number is negative; divide 1 by the function with a negative exponent
  if (exp < 0){
    return 1 / exponent(base, -exp);
  }
  // if the number is positive multiply the base times function -1
  return base * exponent(base, exp -1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
// write a function called powerOfTwo
var powerOfTwo = function(n){
  // base case if the remainder number equals to 1 return true
  // once it returns true it will stop running
  if (n === 1){
    return  true ;
    //modulo the number and is not equal to 0, OR number is loosely equal to 0
  } else if (n % 2 != 0 || n == 0){
    // return false
    return false;
  }else{
    // return the functuon with the number divided between two ( to veryfy )
    return powerOfTwo(n/2);
  }

};

// 9. Write a function that reverses a string.
// write a function reverse
var reverse = function(string) {
  // base case is if the string is empty, return an empty string
  if (string === ""){
    return "";
  }
  /* using the substr method we start at index position 1. cutting each element
   from the string until it reaches and empty string; then using the charAt function
     we are adding the elements of a string starting for the first  position */
  return reverse(string.substr(1)) + string.charAt(0);
};

// 10. Write a function that determines if a string is a palindrome.
// write a function called palindorme
var palindrome = function(string) {
  // set up the value of our string to use the lowercase fucntion
 string = string.toLowerCase("");
 // if there's only one letter the statement is true
if(string.length === 1){
return true;
// else if the first letter and the last letter of the word isn't the same
}else if(string[0] !== string[string.length-1]){
  //return false
return false;
}
// return the function with the substring method taking the first and the last letter;
return palindrome(string.substring(1,-1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  <!--'Base Case'-->
  if (y === 0) {
     return NaN;
   }

  if (x < 0 && y < 0) {
    if (x > y) {
      return x;
     }

  } else if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    if (-x < y) {
       return x;
      }
    <!-- 'recursive case 1' -->
    return modulo(x + y, y);
  } else {
    if (x < y) {
      return x;
     }
  }

  <!--'recursive case 2'-->
  return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {

  if ( y === 0){
    return 0;
  }
  if (x, y < 0){
    return multiply(-x, -y);
  }
  return x + multiply(x, y -1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }
  if (x < 0 && y > 0 && -x < y || x < -y) {
    return 0;
  }
  if (x > 0 && y > 0 && x < y) {
    return 0;
  }

  <!--'recursive cases'-->
  if (x > 0 && y > 0) {
    return 1 + divide(x - y, y);
  } else {
    return -1 + divide(x + y, y);
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y){
  // base cases
  if (x < 0 || y < 0) {
     return null;
   }
 if (y % x === 0) {
   return x;
 }

 // recursive cases
 return gcd(y, x % y);
};


// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // base cases
  if (str1 === '' && str2 === '') {
     return true; 
   }
  if (str1.charAt(0) !== str2.charAt(0)) {
    return false;
  }

  // recursive case
  return compareStr(str1.substr(1), str2.substr(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
