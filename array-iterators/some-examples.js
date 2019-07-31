//Check if a value is more than zero in the array
const numbers = [-1, -2, 0, 10];
const moreThanZero = numbers.some((val, index, array) => val > 0);
console.log(moreThanZero); //true

const numbersAgain = [0, -1, -2];
const moreThanZeroAgain = numbersAgain.some((val, index, array) => val > 0);
console.log(moreThanZeroAgain); //false

//Check if there is at least a country with less than 1000000 people
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

const check = population.some(val => val.pop < 1000000);
console.log(check); //false
