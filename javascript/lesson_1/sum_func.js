function sum(num) {
    let _summ = 0;

    s = (num) => {
        if(num) {
            _summ += num;
            return s;
        } else {
            return _summ;
        }
    }

    return s(num);
}

//test
console.log(sum(1)(2)(3)());