console.log("hello World");
console.log("kwabena Ansah -Asante");

// const doubleMap = (numbers) => {
//   return numbers.map((numbers) => numbers * 2);
// };
// console.log(doubleMap([2, 5, 6, 9]));

//filter
// const filter = (numbers, greaterThan) => {
//   let result = [];
//   for (const number of numbers) {
//     if (number > greaterThan) {
//       result.push(number);
//     }
//   }
//   return result;
// };

// console.log(filter([1, 2, 3, 4, 5, 6, 7], 3));

// const filter = (digits, lessThan) => {
//   let results = [];
//   for (const number in digits) {
//     if (number < lessThan) {
//       results.push(number);
//     }
//   }
//   return results;
// };
// console.log(filter([23, 1, 67, 34, 5, 67, 100, 53], 34));

// const nums = [1, 2, 3, 4, 4, 5, 5, 5, 6, 6];
// console.log(nums.filter((num) => num >= 2));

// const ages = [32, 33, 16, 40, 12, 55];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// const ages = [10, 12, 19, 15, 20, 25];
// console.log(ages.filter((checkAdult) => checkAdult > 18));

const filter = (age, checkAge) => {
  let results = [];
  for (const ages in age) {
    if (ages < checkAge) {
      //   results.push(ages);
    }
  }
  return results;
};
console.log(filter([12, 15, 56, 10, 100], 18));

const actors = [
  { name: "jonny", netWorth: 220000000 },
  { name: "Deep", netWorth: 1000 },
  { name: "Leonardo", netWorth: 1000000000 },
];
console.log(actors.filter((actor) => actor.netWorth > 1000));

const teams = [
  { name: "Machester United", Trophies: 64, coach: "Erik Ten Hang" },
  { name: "Spurs", Trophies: 30, coach: "Antonio Conte" },
  { name: "chelsea", Trophies: 29, coach: "Thomas Tuchle" },
  { name: "Manchester City", Trophies: 18, coach: "Pep Guardiola" },
  { name: "Liverpool", Trophies: 67, coach: "Jurgen Klopp" },
  { name: "Real Madrid", Trophies: 91, coach: "Carlo Ancelotti" },
  { name: "barcelona", Trophies: 90, coach: "Xavi Hernandez" },
];

let result = teams.filter((team) => team.Trophies > 30);
console.log(result);
let names = result.map((teams) => teams.team).join(" ,");
// playground.innerHTML = `<h1>${names}</h1>`;

//reduce()0
const add = [1, 2, 3, 4];
const outCome = add.reduce((a, b) => a + b);

console.log(outCome);

const mul = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const final = mul.reduce((a, b) => a * b);
console.log(final);
