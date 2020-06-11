const fs = require('fs');
function curry(fn, ...args) {
  if (fn.length <= args.length) {
    return fn.apply(fn, args);
  }
  return (...args1) => {
    return curry(fn, ...args, ...args1);
  };
}

const compose = (...fns) => value =>
  fns.reverse().reduce((acc, fn) => fn(acc), value);

const split = curry((reg, str) => {
  return str.split(reg);
});

const readFile = filename => {
  return fs.readFileSync(filename, 'utf-8');
};

const match = curry((reg, str) => {
  return str.match(reg);
});

const reduce = curry((fn, initial, arr) => {
  return arr.reduce(fn, initial);
});

exports.handleEnv = compose(
  reduce((acc, cur) => {
    const keyValue = split('=', cur);
    console.log(keyValue);
    acc[keyValue[0]] = `'${keyValue[1]}'`;
    return acc;
  }, {}),
  match(/([^\s]+)=([^\s]+)/g),
  readFile
);
