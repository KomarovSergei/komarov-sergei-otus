function sum(num) {
  let summ = 0;

  const s = (num2) => {
    if (typeof num2 !== 'undefined') {
      summ += num2;
      return s;
    }

    return summ;
  };

  return s(num);
}


module.exports = sum;
