//Check if there is a value more than 7
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const moreThanSeven = numbers.find((val, index, array) => val > 7);
console.log(moreThanSeven); //8
//Check if there is a value more than 42
const moreThanFortyTwo = numbers.find((val, index, array) => val > 42);
console.log(moreThanFortyTwo); //undefined

//Check if there is a country with more than 100000000 people
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

const check = population.find(val => val.pop > 100000000);
console.log(check); //{ country: 'China', pop: 1409517397 }
