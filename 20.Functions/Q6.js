function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function (...newArgs) {
                return curried(...args, ...newArgs);
            };
        }
    };
}

function add(a, b) {
    return a + b;
}

let curriedAdd = curry(add);

console.log(curriedAdd(2)(3)); //  output: 5 (2 + 3)
console.log(curriedAdd(2, 3)); //  output: 5 (2 + 3)
console.log(curriedAdd(2)(3, 4)); //  output: 5 (2 + 3)
console.log(curriedAdd(2)(3)(4)); //  output: 9 (2 + 3 + 4)
