// setTimeout(() => {
//     console.log("hello");
// }, 2000 //every 1000 is a second
// );

// setInterval(() => {
//     console.log("boom");
// }, 2000);

// let timeoutId = setTimeout(() => {
//     console.log("setTimeout");
// }, 1000);
// clearTimeout(timeoutId);

// let intervalId = setInterval(() => {
//   console.log("setInterval");
// }, 1000);
// clearTimeout(intervalId);

// console.log("start");
// setTimeout(() => {
//     console.log("2 seconds");
// }, 2000);

// console.log("end");

// let counter = 0;
// const intervalId = setInterval(() => {
//     counter++;
//     console.log(`Step: ${counter}`);
//     if (counter >= 5) clearInterval(intervalId);
// }, 3000);

// function sayHello(name) {
//     console.log(`Hello, ${name}`);
// }
// setTimeout(sayHello, 1000, "Rostik");

// const button = document.getElementById("show");
// button.addEventListener("click", () => {
//   const msg = document.getElementById("msg").value;
//   setTimeout(() => {
//     document.getElementById("out").textContent = msg;
//   }, 3000);
// });
/*
let count = 0;
let timerId;

document.getElementById("start").addEventListener("click", () => {
  timerId = setInterval(() => {
    count++;
    document.getElementById("count").textContent = count;
  }, 1000);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(timerId);
});

document.getElementById("clear").addEventListener("click", () => {
  count = 0;
  document.getElementById("count").textContent = count;
});
*/

document.getElementById("click").addEventListener("click", () => {
    document.getElementById("count").textContent = "Wait..."; 
    setTimeout(() => {
        document.getElementById("count").textContent = "Ready!!";
    }, 5000);
});