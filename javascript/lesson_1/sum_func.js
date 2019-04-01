function sum(num) {
    let summ = 0;

    let s = (num) => {
        if(typeof num !== 'undefined') {
            summ += num;
            return s;
        } else {
            return summ;
        }
    }

    return s(num);
}

//tests
console.log(sum(0)(1)());
console.log(sum(1)(2)(3)());