//Check if all values are more than zero
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const moreThanZero = numbers.every((val, index, array) => val > 0);
console.log(moreThanZero); //true

const numbersAgain = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const moreThanZeroAgain = numbersAgain.every((val, index, array) => val > 0);
console.log(moreThanZeroAgain); //false

//Check if there are more than 1000000 people in all the countries
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

const check = population.every(val => val.pop > 1000000);
console.log(check); //true
