// 2. Task 2

const convert = (hash) => [...Object.keys(hash)].map((key) => [key, hash[key]]);

// variant two, build in
const convert2 = (hash) => Object.entries(hash);

module.exports = {
  default: convert
};
