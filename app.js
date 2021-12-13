// ASYNC BASICS EXERCISE

// 1
let name1 = "Luke Skywalker";

function lukeName() {
  console.log(`Question 1`);
  console.log(name1);
}

// function luke(n) {
//   setTimeout(() => {
//     name1 = n;
//   }, 1000);
// }
// luke(`Mark Hamill`);
// lukeName();

function luke(n, callback) {
  setTimeout(() => {
    name1 = n;
    callback();
  }, 1000);
}
luke(`Mark Hamill`, lukeName);

// function lukeName(n, callback){
//   setTimeout(() => {
//     callback(n);
//   }, 1000);
// }
// lukeName(`Mark Hamill`, (name1) => {
//   console.log(name1)
// });

// 2
let name2 = "Han Solo";

function hanName() {
  console.log(`Question 2`);
  console.log(name2);
}

// function han(n) {
//   setTimeout(() => {
//     name2 = n;
//   }, 2000);
// }
// han(`Harrison Ford`);
// hanName();

function han(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      name2 = n;
      resolve();
    }, 2000);
  });
}
han(`Harrison Ford`)
  .then(hanName);

// 3
let name3 = "Leia Organa";

function leiaName() {
  console.log(`Question 3`);
  console.log(name3);
}

// function leia(n) {
//   setTimeout(() => {
//     name3 = n;
//   }, 3000);
// }
// leia('Carrie Fisher');
// leiaName();

function leia(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      name3 = n;
      resolve();
    }, 3000);
  });
}

async function princess(){
  await leia(`Carrie Fisher`);
  leiaName();
}
princess();

// BONUS

// 4
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('First Promise')
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Second Promise')
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Third Promise')
  }, 4000);
});

// Waits until the longest (Time Wise) Promise is complete before it runs the ".then" (AKA Callback function)
Promise.all([p1, p2, p3])
// The value passed in for the "values" parameter are the values returned from each of the Promises still inside an array
.then((values) => console.log(values));