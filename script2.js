let num = function(a, b) {
    if ( ! b) {
        return a;
    }

    return num(b, a % b);
};
console.log(num(10, 25))