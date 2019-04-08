const fn1 = () => {
  console.log('fn1');
  return Promise.resolve(1);
};

const fn2 = () => new Promise((resolve) => {
  console.log('fn2');
  setTimeout(() => resolve(2), 1000);
});

async function promiseReduce(asyncFunctions, reduce, initialValue) {
  for (let i = 0; i < asyncFunctions.length; i++) {
    let fn_result = await asyncFunctions[i]();
    initialValue = reduce(initialValue, fn_result);
  }

  return initialValue;
}

promiseReduce(
  [fn1, fn2],
  function (memo, value) {
    console.log('reduce')
    return memo * value
  },
  1
).then(console.log);