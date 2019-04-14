// 9. Task 9

const countDown = (start) => {
  debugger
  if (isNaN(start)) {
    return NaN;
  } else if (+start) {
    setTimeout(() => countDown(--start), 1000);
  }
  return console.log(start);
}
// test
countDown(3);
