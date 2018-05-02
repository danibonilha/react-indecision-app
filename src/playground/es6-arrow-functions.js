//ES5 functions
function square (x) {
    return x * x;
};

const square = function (x) {
    return x * x;
};

//ES6 functions
const squareArrow = (x) => {
    return x * x;
};

const squareArrow2 = (x) => x * x;

const multiplier = {
	numbers: [10, 20, 30],
	multiplyBy: 3,
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy);
	} 
}

console.log(multiplier.multiply());
