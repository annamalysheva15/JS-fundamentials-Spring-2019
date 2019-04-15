// 6. Task 6
// 6.1. The Largest

const theLargest = (...args) => args.length ? args.reduce((current, next) => current > next ? current : next) : void(0);

// 6.2. The Smallet
const theSmallest = (...args) => args.length ? args.reduce((current, next) => current < next ? current : next) : void(0);

module.exports = {
  theLargest,
  theSmallest
};
