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

/*
document.getElementById("click").addEventListener("click", () => {
    document.getElementById("count").textContent = "Wait..."; 
    setTimeout(() => {
        document.getElementById("count").textContent = "Ready!!";
    }, 5000);
});
*/

// document.getElementById("btn").addEventListener("click", () => {
//   setTimeout(() => {
//     document.getElementById("show").textContent = "Hello";
//   }, 3000);
// });

// let counter = 0;
// setInterval(() => {
//   counter++;
//   document.getElementById("count").textContent = counter;
// }, 1000);

// setTimeout(() => {
//   document.getElementById("box").style.display= "none";
// }, 5000);

// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   document.getElementById("count").textContent = counter;
//   if (counter >= 5) clearInterval(interval);
// }, 1000);

// document.getElementById("btn").addEventListener("click", () => {
//   setTimeout(() => {
//     document.getElementById("btn").style.backgroundColor = "green";
//   }, 2000)
// })

// setInterval(() => {
//   document.getElementById("txt").textContent = "hello "
// }, 2000);

// let counter = 10;
// const timer = setInterval(() => {
//   counter--;
//   document.getElementById("counter").textContent = counter;
//   if (counter <= -1) {
//     clearInterval(timer);
//     document.getElementById("counter").textContent = "start";
//   }
// }, 1000);


function showHoverText() {
  setTimeout(() => {
    document.getElementById("txt").textContent = "Hovered";
  }, 1000);
};