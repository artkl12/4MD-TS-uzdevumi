// import $ from 'jquery';
// import sum from './utils/sum/sum';

// console.log('Ready for coding');

// console.log('Body jQuery node:', $('body'));
// console.log('Body javascript node:', document.querySelector('body'));
// console.log('2 + 3 =', sum(2, 3));

//Task 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

const Sum = (a: number, b: number) => a + b;
console.log(Sum(1, 2)); // 3
console.log(Sum(1, 10)); // 11
console.log(Sum(99, 1)); // 100

//Task 2
// Write a function that takes a value as argument
// Return the type of the value

const Type = (a: any) => typeof a;
console.log(Type(false)); // boolean
console.log(Type({})); // object
console.log(Type(null)); // object
console.log(Type("string")); // string
console.log(Type(["array"])); // object

//Task 3
//Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

function Same(a: any, b: any) {
  return a === b && typeof a === typeof b;
}
console.log(Same(2, 3)); // false
console.log(Same(3, 3)); // true
console.log(Same(1, "1")); // false
console.log(Same("10", "10")); // true

//Task 4
// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

const returnChar = (a: string, n: number) => a.charAt(n - 1);
console.log(returnChar("abcd", 1)); // a
console.log(returnChar("zyxbwpl", 5)); // w
console.log(returnChar("gfedcba", 3)); // e

//Task 5
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

const removeFirstThreeChar = (a: string) => a.slice(3);
console.log(removeFirstThreeChar("abcdefg")); // 'defg'
console.log(removeFirstThreeChar("1234")); // '4'
console.log(removeFirstThreeChar("fgedcba")); // 'dcba'

//Task 6
//Write a function that takes a string as argument
//Extract the last 3 characters from the string
//Return the result

const extractLastThreeChar = (a: string) => a.slice(-3);
console.log(extractLastThreeChar("abcdefg")); // 'efg'
console.log(extractLastThreeChar("1234")); // '234'
console.log(extractLastThreeChar("fgedcba")); //'cba'

//Task 7
//Write a function that takes a string (a) as argument
//Get the first 3 characters of a
//Return the result

const getFirstThreeChar = (a: string) => a.substring(0, 3);
console.log(getFirstThreeChar("abcdefg")); // 'abc'
console.log(getFirstThreeChar("1234")); // '123'
console.log(getFirstThreeChar("fgedcba")); // 'fge'

//Task 8
//Write a function that takes a string (a) as argument
//Extract the first half a
//Return the result

const getFirstHalf = (a: string) => a.slice(0, a.length / 2);
console.log(getFirstHalf("abcdefgh")); //  'abcd'
console.log(getFirstHalf("1234")); //  '12'
console.log(getFirstHalf("gedcba")); //  'ged'

//Task 9
//Write a function that takes a string (a) as argument
//Remove the last 3 characters of a
//Return the result

const removeLastThree = (a: string) => a.slice(0, a.length - 3);
console.log(removeLastThree("abcdefg")); //  'abcd'
console.log(removeLastThree("1234")); //  '1'
console.log(removeLastThree("fgedcba")); //  'fged'

//Task 10
//Write a function that takes two numbers (a and b) as argument
//Return b percent of a

const perCent = (a: number, b: number) => a * (b / 100);
console.log(perCent(100, 50)); //  50
console.log(perCent(10, 1)); //  0.1
console.log(perCent(500, 25)); //  125

//Task 11
//Write a function that takes 6 values (a,b,c,d,e,f) as arguments
//Sum a and b
//Then substract by c
//Then multiply by d and divide by e
//Finally raise to the power of f and return the result
//Tip: mind the order

const myFunction = (
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
) => Math.pow(((a + b - c) * d) / e, f);
console.log(myFunction(6, 5, 4, 3, 2, 1)); //  10.5
console.log(myFunction(6, 2, 1, 4, 2, 3)); //  2744
console.log(myFunction(2, 3, 6, 4, 2, 3)); //  -8

//Task 12
//Write a function that takes a number as argument
//If the number is even, return true
//Otherwise, return false

const evenOrOdd = (a: number) => a % 2 === 0;
console.log(evenOrOdd(10)); //  true
console.log(evenOrOdd(-4)); //  true
console.log(evenOrOdd(5)); //  false
console.log(evenOrOdd(-111)); //  false

//Task 13
//Write a function that takes two strings (a and b) as arguments
//Return the number of times a occurs in b

const countChar = (a: string, b: string) => b.split(a).length - 1;
console.log(
  countChar("m", "how many times does the character occur in this sentence?")
); //  2
console.log(
  countChar("h", "how many times does the character occur in this sentence?")
); //  4
console.log(
  countChar("?", "how many times does the character occur in this sentence?")
); //  1
console.log(
  countChar("z", "how many times does the character occur in this sentence?")
); //  0

//Task 14
//Write a function that takes a number (a) as argument
//If a is a whole number (has no decimal place), return true
//Otherwise, return false

console.log(Number.isInteger(4)); //  true
console.log(Number.isInteger(1.123)); //  false
console.log(Number.isInteger(1048)); //  true
console.log(Number.isInteger(10.48)); //  false

//Task 15
//Write a function that takes two numbers (a and b) as arguments
//If a is smaller than b, divide a by b
//Otherwise, multiply both numbers
//Return the resulting value

const ifSmallerThanDivide = (a: number, b: number) => (a < b ? a / b : a * b);

console.log(ifSmallerThanDivide(10, 100)); //  0.1
console.log(ifSmallerThanDivide(90, 45)); //  4050
console.log(ifSmallerThanDivide(8, 20)); //  0.4
console.log(ifSmallerThanDivide(2, 0.5)); //  1

//Task 16
//Write a function that takes two strings (a and b) as arguments
//If a contains b, append b to the beginning of a
//If not, append it to the end
//Return the concatenation

const ifContains = (a: string, b: string) =>
  a.includes(b) ? b.concat(a) : a.concat(b);
console.log(ifContains("cheese", "cake")); // 'cheesecake'
console.log(ifContains("lips", "s")); // 'slips'
console.log(ifContains("Java", "script")); // 'Javascript'
console.log(ifContains(" think, therefore I am", "I")); // 'I think, therefore I am'

//Task 17
//Write a function that takes a number (a) as argument
//Round a to the 2nd digit after the comma
//Return the rounded number

const round = (a: number) => a.toFixed(2);
console.log(round(2.12397)); // 2.12
console.log(round(3.136)); // 3.14
console.log(round(1.12397)); // 1.12
console.log(round(26.1379)); // 26.14

//Task 18
//Write a function that takes a number (a) as argument
//Split a into its individual digits and return them in an array
//Tip: you might want to change the type of the number for the splitting

const myFunct = (a: any) => a.toString().split("");
console.log(myFunct(10)); // [1,0]
console.log(myFunct(931)); // [9,3,1]
console.log(myFunct(193278)); // [1,9,3,2,7,8]

//Task 19
//It seems like something happened to these strings
//Can you figure out how to clear up the chaos?
//Write a function that joins these strings together such that they form the following //words:
//'Javascript', 'Countryside', and 'Downtown'
//You might want to apply basic JS string methods such as replace(), split(), slice() //etc.

function tidyUpString(str1: string, str2: string) {
  return (
    str1.replace(/[^a-zA-Z0-9]/g, "") +
    str2
      .replace(/[^a-zA-Z0-9]/g, "")
      .split("")
      .reverse()
      .join("")
  );
}
console.log(tidyUpString("java", "tpi%rcs")); // 'Javascript'
console.log(tidyUpString("c%ountry", "edis")); // 'Countryside'
console.log(tidyUpString("down", "nw%ot")); // 'Downtown'

//Task 20
//This challenge is a little bit more complex
//Write a function that takes a number (a) as argument
//If a is prime, return a
//If not, return the next higher prime number

function primeNumber(a: number) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    return a;
  } else {
    let nextNum = a + 1;
    while (true) {
      isPrime = true;
      for (let i = 2; i <= Math.sqrt(nextNum); i++) {
        if (nextNum % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        return nextNum;
      }
      nextNum++;
    }
  }
}
console.log(primeNumber(38)); // 41
console.log(primeNumber(7)); // 7
console.log(primeNumber(115)); // 127
console.log(primeNumber(2000)); // 2003

//Task 21
//Write a function that takes two numbers, say x and y, as arguments
//Check if x is divisible by y
//If yes, return x
//If not, return the next higher natural number that is divisible by y

function checkDivisible(x: number, y: number) {
  if (x % y === 0) {
    return x;
  } else {
    let nextNum = Math.ceil(x / y) * y;
    return nextNum;
  }
}
console.log(checkDivisible(1, 23)); // 23
console.log(checkDivisible(23, 23)); // 23
console.log(checkDivisible(7, 3)); // 9
console.log(checkDivisible(-5, 7)); // 0

//Task 22
//Write a function that takes two strings (a and b) as arguments
//Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
//Return the resulting string

function insertFromTheEnd(a: string, b: string) {
  let result = "";
  for (let i = a.length - 1; i >= 0; i--) {
    result = a[i] + result;
    if ((a.length - i) % 3 === 0) {
      result = b + result;
    }
  }
  return result;
}
console.log(insertFromTheEnd("1234567", ".")); // '1.234.567'
console.log(insertFromTheEnd("abcde", "$")); // 'ab$cde'
console.log(insertFromTheEnd("zxyzxyzxyzxyzxyz", "w")); // 'zwxyzwxyzwxyzwxyzwxyz'

//?????????? Task 23 ????????????
//Write a function that takes a string as argument
//As it is, the string has no meaning
//Increment each letter to the next letter in the alphabet
//Return the correct word

function incrementString(str: string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const inputArray = str.split("");
  for (let i = 0; i < inputArray.length; i++) {
    const char = inputArray[i].toLowerCase();
    if (alphabet.includes(char)) {
      const currentIndex = alphabet.indexOf(char);
      const nextIndex = (currentIndex + 1) % 26; // Ensure it wraps around to 'a' after 'z'
      const nextChar = alphabet[nextIndex];
      inputArray[i] =
        inputArray[i] === char ? nextChar : nextChar.toUpperCase();
    }
  }
  return inputArray.join("");
}
console.log(incrementString("bnchmf")); // 'coding'
console.log(incrementString("bgddrd")); // 'cheese'
console.log(incrementString("sdrshmf")); // 'testing'

//Task 24
//Write a function that takes an array (a) and a value (n) as argument
//Return the nth element of 'a'

function getNthElement(a: number[], n: number) {
  return a[n - 1];
}
console.log(getNthElement([1, 2, 3, 4, 5], 3)); // 3
console.log(getNthElement([10, 9, 8, 7, 6], 5)); // 6
console.log(getNthElement([7, 2, 1, 6, 3], 1)); // 7

//Task 25
//Write a function that takes an array (a) as argument
//Remove the first 3 elements of 'a'
//Return the result

const removeFromArray = (n: number[]) => n.slice(3);
console.log(removeFromArray([1, 2, 3, 4])); // [4]
console.log(removeFromArray([5, 4, 3, 2, 1, 0])); // [2,1,0]
console.log(removeFromArray([99, 1, 1])); // []

//Task 26
//Write a function that takes an array (a) as argument
//Extract the last 3 elements of a
//Return the resulting array

const removeLastFromArray = (n: number[]) => n.slice(-3);
console.log(removeLastFromArray([1, 2, 3, 4])); // [2,3,4]
console.log(removeLastFromArray([5, 4, 3, 2, 1, 0])); // [2,1,0]
console.log(removeLastFromArray([99, 1, 1])); // [99,1,1]

//Task 27
//Write a function that takes an array (a) as argument
//Extract the first 3 elements of a
//Return the resulting array

const extractFirstFromArray = (n: number[]) => n.slice(0, 3);
console.log(extractFirstFromArray([1, 2, 3, 4])); // [1,2,3]
console.log(extractFirstFromArray([5, 4, 3, 2, 1, 0])); // [5,4,3]
console.log(extractFirstFromArray([99, 1, 1])); // [99,1,1]

//Task 28
//Write a function that takes an array (a) and a number (n) as arguments
//It should return the last n elements of a

const extractLastFromArray = (a: number[], n: number) => a.slice(-n);

console.log(extractLastFromArray([1, 2, 3, 4, 5], 2)); // [ 4, 5 ]
console.log(extractLastFromArray([1, 2, 3], 6)); // [ 1, 2, 3 ]
console.log(extractLastFromArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [ 6, 7, 8 ]

//Task 29
//Write a function that takes an array (a) and a value (b) as argument
//The function should clean a from all occurrences of b
//Return the filtered array

function removeValue(a: any[], b: any) {
  return a.filter(function (value) {
    return value !== b;
  });
}
console.log(removeValue([1, 2, 3], 2)); // [1, 3]
console.log(removeValue([1, 2, "2"], "2")); // [1, 2]
console.log(removeValue([false, "2", 1], false)); // ['2', 1]
console.log(removeValue([1, 2, "2", 1], 1)); // [2, '2']

//Task 30
//Write a function that takes an array (a) as argument
//Return the number of elements in a

const lengthOfArray = (a: number[]) => a.length;
console.log(lengthOfArray([1, 2, 2, 4])); // 4
console.log(lengthOfArray([9, 9, 9])); // 3
console.log(lengthOfArray([4, 3, 2, 1, 0])); // 5

//Task 31
//Write a function that takes an array of numbers as argument
//Return the number of negative values in the array

function lengthNegative(a: number[]) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      count++;
    }
  }
  return count;
}
console.log(lengthNegative([1, -2, 2, -4])); // 2
console.log(lengthNegative([0, 9, 1])); // 0
console.log(lengthNegative([4, -3, 2, 1, 0])); // 1

//Task 32
//Write a function that takes an array of numbers as argument
//It should return an array with the numbers sorted in descending order

const reversedArray = (a: any) => a.reverse();
console.log(reversedArray([1, 3, 2])); // [3,2,1]
console.log(reversedArray([4, 2, 3, 1])); // [4,3,2,1]

//Task 33
//Write a function that takes an array of strings as argument
//Sort the array elements alphabetically
//Return the result

const sorted = (a: string[]) => a.sort();
console.log(sorted(["b", "c", "d", "a"])); // ['a', 'b', 'c', 'd']
console.log(sorted(["z", "c", "d", "a", "y", "a", "w"])); // ['a', 'a', 'c', 'd', 'w', 'y', 'z']

//Task 34
//Write a function that takes an array of numbers as argument
//It should return the average of the numbers

const averageArray = (a: number[]) => a.reduce((a, b) => a + b, 0) / a.length;
console.log(averageArray([10, 100, 40])); // 50
console.log(averageArray([10, 100, 1000])); // 370
console.log(averageArray([-50, 0, 50, 200])); // 50

//Task 35
//Write a function that takes an array of strings as argument
//Return the longest string

function getLongestString(a: string[]) {
  let longest = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i].length > longest.length) {
      longest = a[i];
    }
  }
  return longest;
}
console.log(getLongestString(["help", "me"])); // 'help'
console.log(getLongestString(["I", "need", "candy"])); // 'candy'

//Task 36
//Write a function that takes an array as argument
//It should return true if all elements in the array are equal
//It should return false otherwise

function equalStr(a: any) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== a[0]) {
      return false;
    }
  }
  return true;
}

console.log(equalStr([true, true, true, true])); // true
console.log(equalStr(["test", "test", "test"])); // true
console.log(equalStr([1, 1, 1, 2])); // false
console.log(equalStr(["10", 10, 10, 10])); // false

//Task 37
//Write a function that takes arguments an arbitrary number of arrays
//It should return an array containing the values of all arrays

function concatedArrays(...arrays: any) {
  return [].concat(...arrays);
}
console.log(concatedArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(concatedArrays(["a", "b", "c"], [4, 5, 6])); // ['a', 'b', 'c', 4, 5, 6]
console.log(concatedArrays([true, true], [1, 2], ["a", "b"])); // [true, true, 1, 2, 'a', 'b']

//Task 38
//Write a function that takes an array of objects as argument
//Sort the array by property b in ascending order
//Return the sorted array

function sortArr(arr: any) {
  return arr.sort((a: any, b: any) => a.b - b.b);
}
console.log(
  sortArr([
    { a: 1, b: 2 },
    { a: 5, b: 4 },
  ])
); // [{a:1,b:2},{a:5,b:4}]
console.log(
  sortArr([
    { a: 2, b: 10 },
    { a: 5, b: 4 },
  ])
); // [{a:5,b:4},{a:2,b:10}]
console.log(
  sortArr([
    { a: 1, b: 7 },
    { a: 2, b: 1 },
  ])
); // [{a:2,b:1},{a:1,b:7}]

//Task 39
//Write a function that takes two arrays as arguments
//Merge both arrays and remove duplicate values
//Sort the merge result in ascending order
//Return the resulting array

function mergeAndSort(arr1: number[], arr2: number[]) {
  let mergedArr = [...arr1, ...arr2];
  let uniqueArr = [...new Set(mergedArr)];
  return uniqueArr.sort((a, b) => a - b);
}
console.log(mergeAndSort([1, 2, 3], [3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
console.log(mergeAndSort([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); // [ -11, -10, 5, 22, 41,  42, 333]

//Task 40
//Write a function that takes an array (a) and a number (b) as arguments
//Sum up all array elements with a value greater than b
//Return the sum

function summUp(a: number[], b: number) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
      if (a[i] > b) {
          sum += a[i];
      }
  }
  return sum;
}
console.log(summUp([1, 2, 3, 4, 5, 6, 7], 2)) // 25
console.log(summUp([-10, -11, -3, 1, -4], -3)) // 1
console.log(summUp([78, 99, 100, 101, 401], 99)) // 602

//Task 41
//Write a function that takes two numbers (min and max) as arguments
//Return an array of numbers in the range min to max

function arrOfNumbersBetween(min: number, max: number) {
  return Array.from({length: max - min + 1}, (_, i) => i + min);
}
console.log(arrOfNumbersBetween(2, 10)) // [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arrOfNumbersBetween(1, 3)) // [1, 2, 3]
console.log(arrOfNumbersBetween(-5, 5)) // [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(arrOfNumbersBetween(2, 7)) // [2, 3, 4, 5, 6, 7]

//Task 42
//Write a function that takes an array of strings as argument
//Group those strings by their first letter
//Return an object that contains properties with keys representing first letters
//The values should be arrays of strings containing only the corresponding strings
//For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
//{ a: ['Alf', 'Alice'], b: ['Ben']}

function createObject(arr: string[]) {
  const result: {[key: string]: string[]} = {};
  for (let i = 0; i < arr.length; i++) {
      const firstLetter = arr[i][0].toLowerCase();
      if (!result[firstLetter]) {
          result[firstLetter] = [];
      }
      result[firstLetter].push(arr[i]);
  }
  return result;
}
console.log(createObject(['Alf', 'Alice', 'Ben'])) // { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(createObject(['Ant', 'Bear', 'Bird'])) // { a: ['Ant'], b: ['Bear', 'Bird']}
console.log(createObject(['Berlin', 'Paris', 'Prague'])) // { b: ['Berlin'], p: ['Paris', 'Prague']}

//Task 43
//Write a function that takes an array with arbitrary elements and a number as arguments
//Return a new array, the first element should be either the given number itself
//or zero if the number is smaller than 6
//The other elements should be the elements of the original array
//Try not to mutate the original array

function createArray(arr: any[], num: number) {
  const result = [num < 6 ? 0 : num, ...arr];
  return result;
}
console.log(createArray([1,2,3], 6)) // [6,1,2,3]
console.log(createArray(['a','b'], 2)) // [0,'a','b']
console.log(createArray([null,false], 11)) // [11,null,false]

//Task 44
//Write a function that takes an array (a) and a value (n) as arguments
//Save every nth element in a new array
//Return the new array

function neArrayOfNthElement(a: any[], n: number) {
  const result = [];
  for (let i = n - 1; i < a.length; i += n) {
      result.push(a[i]);
  }
  return result;
}
console.log(neArrayOfNthElement([1,2,3,4,5,6,7,8,9,10],3)) // [3,6,9]
console.log(neArrayOfNthElement([10,9,8,7,6,5,4,3,2,1],5)) // [6,1]
console.log(neArrayOfNthElement([7,2,1,6,3,4,5,8,9,10],2)) // [2,6,4,8,10]

//Task 45
//Write a function that takes an object with two properties as argument
//It should return the value of the property with key country

function returnValueKeyCountry(obj: { [key: string]: any }) {
  return obj.country;
}
console.log(returnValueKeyCountry({  continent: 'Asia',  country: 'Japan'})) // 'Japan'
console.log(returnValueKeyCountry({  country: 'Sweden',  continent: 'Europe'})) // 'Sweden'

//Task 46
//Write a function that takes an object with two properties as argument
//It should return the value of the property with key 'prop-2'
//Tip: you might want to use the square brackets property accessor

function returnValueKeyProp(obj: { [key: string]: any }) {
  return obj['prop-2'];
}
console.log(returnValueKeyProp({  one: 1,  'prop-2': 2})) // 2
console.log(returnValueKeyProp({  'prop-2': 'two',  prop: 'test'})) // 'two'

//Task 47
//Write a function that takes an object with two properties and a string as arguments
//It should return the value of the property with key equal to the value of the string

function returnValueKeyString(obj: { [key: string]: any }, str: string) {
  return obj[str];
}
console.log(returnValueKeyString({  continent: 'Asia',  country: 'Japan'}, 'continent')) // 'Asia'
console.log(returnValueKeyString({  country: 'Sweden',  continent: 'Europe'}, 'country')) // 'Sweden'

//Task 48
//Write a function that takes an object (a) and a string (b) as argument
//Return true if a has a property with key b
//Return false otherwise

function checkObjectHasKeyString(a: { [key: string]: any }, b: string) {
  return b in a;
}
console.log(checkObjectHasKeyString({a:1,b:2,c:3},'b')) // true
console.log(checkObjectHasKeyString({x:'a',y:'b',z:'c'},'a')) // false
console.log(checkObjectHasKeyString({x:'a',y:'b',z:'c'},'z')) // true

//Task 49
//Write a function that a string (a) as argument
//Create an object that has a property with key 'key' and a value of a
//Return the object

function createObjectitkKey(a: string) {
  return { key: a };
}
console.log(createObjectitkKey('a')) // {key:'a'}
console.log(createObjectitkKey('z')) // {key:'z'}
console.log(createObjectitkKey('b')) // {key:'b'}

//Task 50
//Write a function that takes two strings (a and b) as arguments
//Create an object that has a property with key 'a' and a value of 'b'
//Return the object

function createObjectKeyValue(a: string, b: string) {
  const result = { [a]: b };
  return result;
}
console.log(createObjectKeyValue('a','b')) // {a:'b'}
console.log(createObjectKeyValue('z','x')) // {z:'x'}
console.log(createObjectKeyValue('b','w')) // {b:'w'}

//Task 51
//Write a function that takes two arrays (a and b) as arguments
//Create an object that has properties with keys 'a' and corresponding values 'b'
//Return the object

function createObjectAB(a: any[], b: any[]) {
  const result: { [key: string]: number } = {};
  for (let i = 0; i < a.length; i++) {
      result[a[i]] = b[i];
  }
  return result;
}
console.log(createObjectAB(['a','b','c'],[1,2,3])) // {a:1,b:2,c:3}
console.log(createObjectAB(['w','x','y','z'],[10,9,5,2])) // {w:10,x:9,y:5,z:2}
console.log(createObjectAB([1,'b'],['a',2])) // {1:'a',b:2}

//Task 52
//Write a function that takes an object (a) as argument
//Return an array with all object keys

function returnKeys(a: { [key: string]: any }) {
  return Object.keys(a);
}
console.log(returnKeys({a:1,b:2,c:3})) // ['a','b','c']
console.log(returnKeys({j:9,i:2,x:3,z:4})) // ['j','i','x','z']
console.log(returnKeys({w:15,x:22,y:13})) // ['w','x','y']

//Task 53
//Write a function that takes an object (a) as argument
//Return the sum of all object values

function sumValues(a: { [key: string]: number }) {
  let sum = 0;
  for (const key in a) {
      if (Object.prototype.hasOwnProperty.call(a, key)) {
          sum += a[key];
      }
  }
  return sum;
}
console.log(sumValues({a:1,b:2,c:3})) // 6
console.log(sumValues({j:9,i:2,x:3,z:4})) // 18
console.log(sumValues({w:15,x:22,y:13})) // 50

//Task 54
//Write a function that takes an object as argument
//It should return an object with all original object properties
//except for the property with key 'b'

function returnExceptKeyB(a: { [key: string]: any }) {
  const result = { ...a };
  delete result['b'];
  return result;
}
console.log(returnExceptKeyB({ a: 1, b: 7, c: 3 })) // { a: 1, c: 3 }
console.log(returnExceptKeyB({ b: 0, a: 7, d: 8 })) // { a: 7, d: 8 }
console.log(returnExceptKeyB({ e: 6, f: 4, b: 5, a: 3 })) // { e: 6, f: 4, a: 3 }

// ?????????? Task 55 ???????????
//Write a function that takes two objects as arguments
//Unfortunately, the property 'b' in the second object has the wrong key
//should be named 'd' instead
//Merge both objects and correct the wrong property name
//Return the resulting object
//It should have the properties 'a', 'b', 'c', 'd', and 'e'

function correctSecondObject(obj1: { [key: string]: any }, obj2: { [key: string]: any }): { [key: string]: any } {
  const result = { ...obj1, ...obj2 };
  if (result.hasOwnProperty('b')) {
      result.d = result.b;
      delete result.b;
  }
  return result;
}
console.log(correctSecondObject({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })) // { a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(correctSecondObject({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })) // { a: 5, b: 4, c: 3, e: 2, d: 1}

//Task 56
//Write a function that takes an object (a) and a number (b) as arguments
//Multiply all values of 'a' by 'b'
//Return the resulting object

function multiplyObjects(a: { [key: string]: number }, b: number) {
  const result: { [key: string]: number } = {};
  for (const key in a) {
      if (Object.prototype.hasOwnProperty.call(a, key)) {
          result[key] = a[key] * b;
      }
  }
  return result;
}
console.log(multiplyObjects({a:1,b:2,c:3},3)) // {a:3,b:6,c:9}
console.log(multiplyObjects({j:9,i:2,x:3,z:4},10)) // {j:90,i:20,x:30,z:40}
console.log(multiplyObjects({w:15,x:22,y:13},6)) // {w:90,x:132,y:78}

//Task 57
//Write a function that takes an object as argument
//Somehow, the properties and keys of the object got mixed up
//Swap the Javascript object's key with its values and return the resulting object

function swapKeyValues(obj: { [key: string]: any }) {
  const result: { [key: string]: any } = {};
  for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
          result[obj[key]] = key;
      }
  }
  return result;
}
console.log(swapKeyValues({z:'a',y:'b',x:'c',w:'d'})) // {a:'z',b:'y',c:'x',d:'w'}
console.log(swapKeyValues({2:'a',4:'b',6:'c',8:'d'})) // {a:'2',b:'4',c:'6',d:'8'}
console.log(swapKeyValues({a:1,z:24})) // {1:'a',24:'z'}

//Task 58
//Write a function that takes an object as argument
//Some of the property values contain empty strings
//Replace empty strings and strings that contain only whitespace with null values
//Return the resulting object

function replaceEmty(obj: { [key: string]: any }) {
  const result: { [key: string]: any } = {};
  for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
          result[key] = obj[key].trim() === '' ? null : obj[key];
      }
  }
  return result;
}
console.log(replaceEmty({ a: 'a', b: 'b', c: '' })) // { a: 'a', b: 'b', c: null }
console.log(replaceEmty({ a: '', b: 'b', c: ' ', d: 'd' })) // { a: null, b: 'b', c: null, d: 'd' }
console.log(replaceEmty({ a: 'a', b: 'b ', c: ' ', d: '' })) // { a: 'a', b: 'b ', c: null, d: null }

//Task 59
//Write a function that takes an object as argument containing properties with //personal information
//Extract firstName, lastName, size, and weight if available
//If size or weight is given transform the value to a string
//Attach the unit cm to the size
//Attach the unit kg to the weight
//Return a new object with all available properties that we are interested in

function returnObjValues(obj: { [key: string]: any }): { [key: string]: any } {
  const result: { [key: string]: any } = {};
  if (obj.hasOwnProperty('firstName')) {
      result.firstName = obj.firstName;
  }
  if (obj.hasOwnProperty('lastName')) {
      result.lastName = obj.lastName;
  }
  if (obj.hasOwnProperty('size')) {
      result.size = `${obj.size}cm`;
  }
  if (obj.hasOwnProperty('weight')) {
      result.weight = `${obj.weight}kg`;
  }
  return result;
}
console.log(returnObjValues({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})) // {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
console.log(returnObjValues({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})) // {fn: 'Martin', ln: 'Harper', weight: '102kg'}
console.log(returnObjValues({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})) // {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
console.log(returnObjValues({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})) // {fn: 'Matthew', ln: 'Müller'}

//Task 60
//Write a function that takes an array of objects and a string as arguments
//Add a property with key 'continent' and value equal to the string to each of the //objects
//Return the new array of objects
//Tip: try not to mutate the original array

function mapStringIntoObject(arr: { [key: string]: any }[], str: string) {
  const result = arr.map((obj) => {
      return { ...obj, continent: str };
  });
  return result;
}
console.log(mapStringIntoObject([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')) // [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
console.log(mapStringIntoObject([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')) // [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

//Task 61
//Write a function that takes an array of numbers as argument
//Convert the array to an object
//It should have a key for each unique value of the array
//The corresponding object value should be the number of times the key occurs within the array

function arrayToObject(arr: number[]) {
  const obj: {[key: number]: number} = {};
  for (const num of arr) {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  }
  return obj;
}

console.log(arrayToObject([1,2,2,3])) // {1:1,2:2,3:1}
console.log(arrayToObject([9,9,9,99])) // {9:3,99:1}
console.log(arrayToObject([4,3,2,1])) // {1:1,2:1,3:1,4:1}

//Task 62
//Write a function that takes two date instances as arguments
//It should return true if the dates are equal
//It should return false otherwise

function compareDate(date1: Date, date2: Date) {
  return date1.getTime() === date2.getTime();
}

console.log(compareDate(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))) // false
console.log(compareDate(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))) // true
console.log(compareDate(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))) // false

//Task 63
//Write a function that takes two date instances as argument
//It should return the number of days that lies between those dates

function countDays(date1: Date, date2: Date) {
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
console.log(countDays(new Date('2020-06-11'), new Date('2020-06-01'))) //  10
console.log(countDays(new Date('2000-01-01'), new Date('2020-06-01'))) //  7457

//Task 64
//Write a function that takes two date instances as argument
//It should return true if they fall on the exact same day
//It should return false otherwise

function exactDay(date1: Date, date2: Date) {
  return date1.toDateString() === date2.toDateString();
}
console.log(exactDay(new Date('2000/01/01'), new Date('2000/01/01'))) // true 
console.log(exactDay(new Date('2000/01/01'), new Date('2000/01/02'))) // false 
console.log(exactDay(new Date('2001/01/01'), new Date('2000/01/01'))) // false 
console.log(exactDay(new Date('2000/11/01'), new Date('2000/01/01'))) // false

//Task 65
// Write a function that takes two number arrays as parameters
// and return an array which contains elements from both
// arrays

function concatArrays(arr1: number[], arr2: number[]) {
  return [...arr1, ...arr2];
}
console.log(concatArrays([1, 2], [3, 4])) // [1, 2, 3, 4]
console.log(concatArrays([1, 2], [3, 4, 5, 6])) // [1, 2, 3, 4, 5, 6]

//Task 66
// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the last element

function pushString(arr: any[], str: string) {
  const newArr = arr.slice();
  newArr.push(str);
  return newArr;
}
console.log(pushString(['Apple', 'Orange', 'Banana'], 'Kiwi')) //  ['Apple', 'Orange', 'Banana', 'Kiwi']

//Task 67
// Write a function that takes an array and a string as parameters
// and return an array which contains all elements from the given array
// and the given string as the first element

function pushElem(arr: any[], str: string) {
  const newArr = [str];
  for (const elem of arr) {
    newArr.push(elem);
  }
  return newArr;
}
console.log(pushElem(['Apple', 'Orange', 'Banana'], 'Kiwi')) //  ['Kiwi', 'Apple', 'Orange', 'Banana']

//Task 68
// Write a function that takes two objects as parameters
// and return an object which contains properties from both objects

function newObject(obj1: {[key: string]: any}, obj2: {[key: string]: any}) {
  const newObj = {...obj1, ...obj2};
  return newObj;
}
console.log(newObject({ a:1, b:2 }, { c:3, d:4 })  ) //  { a:1, b:2, c:3, d:4 }
console.log(newObject({ a:1, b:2 }, { c:3, d:4, e:5, f:6 })  ) //  { a:1, b:2, c:3, d:4, e:5, f:6 }

//Task 69
// Write a function that takes an object and a string as parameters
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

function favoriteMovie(obj: {[key: string]: any}, str: string): {[key: string]: any} {
  const newObj = {...obj, favoriteMovie: str};
  return newObj;
}
console.log(favoriteMovie({ eyeColor: 'green', age: 10 }, 'Garfield')) //  { eyeColor: 'green', age: 10, favoriteMovie:  'Garfield' }
console.log(favoriteMovie({ eyeColor: 'blue', age: 15 }, 'Twilight')) //  { eyeColor: 'blue', age: 15, favoriteMovie:  'Twilight' }
