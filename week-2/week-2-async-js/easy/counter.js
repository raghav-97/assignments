let count = 0;

function Counter() {
  count++;
  console.log(count);
  setTimeout(Counter, 1000);
}

Counter();

// setInterval(() => {
//   Counter();
// }, 1000);
