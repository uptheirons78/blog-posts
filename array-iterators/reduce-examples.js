const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Let's start with a basic example
//Sum all the numbers in an array of integers
const sum = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
  //Look we set the Initial Value to 0, because it is a sum so the count starts at 0
  //So our Accumulator is 0 at first call and we sum it with the Current Value that is 1 at first call...
  //the new Accumulator will be 0 + 1 = 1 ...at any call the Current Value will be added to it
  //till the end of the array
  return accumulator + currentValue;
}, 0);
console.log(sum); // output: 55

//Same example setting the Initial Value to 1 instead of 0 will return ... 56
const anotherSum = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
}, 1);
console.log(anotherSum); // output: 56

//Sum from an array of objects
const integers = [{ x: 1 }, { x: 2 }, { x: 3 }];
const anotherSumAgain = integers.reduce((acc, val, idx, array) => {
  return acc + val.x;
}, 0);
console.log(anotherSumAgain); // output: 6

//Count vowels in a string (even though it's easier with regex 😉)
const maryPoppins = 'supercalifragilisticexpialidocious';
const onlyVowels = maryPoppins.replace(/[^aeiou]/gi, ''); //'ueaiaiiieiaioiou'
const arrOfVowels = [...onlyVowels]; //["u", "e", "a", "i", "a", "i", "i", "i", "e", "i", "a", "i", "o", "i", "o", "u"]
const countVowels = arrOfVowels.reduce((acc, val) => {
  acc.hasOwnProperty(val) ? (acc[val] += 1) : (acc[val] = 0);
  return acc;
}, {});
console.log(countVowels); // output: {u: 1, e: 1, a: 2, i: 6, o: 1}

//Flatten an array of arrays
//Hey! I know ES2019 gave us flat and flatMap methods, but we MUST learn reduce() now 😉
const someData = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flatten = someData.reduce((acc, val) => {
  //set the initial value to an empty array
  return acc.concat(val);
}, []);
console.log(flatten); // output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//Sum all countries population except China
const population = [
  {
    country: 'China',
    pop: 1409517397
  },
  {
    country: 'India',
    pop: 1339180127
  },
  {
    country: 'USA',
    pop: 324459463
  },
  {
    country: 'Indonesia',
    pop: 263991379
  }
];
const sumPopulationButNotChina = population.reduce((acc, val) => {
  // we use the Ternary Operator as a "filter"
  //if val.country is not equal to "China" we add the value to the accumulator
  //if it is equal to "China" we add nothing and simply return the accumulator
  return val.country !== 'China' ? acc + val.pop : acc;
}, 0);

console.log(sumPopulationButNotChina); // output: 1927630969
