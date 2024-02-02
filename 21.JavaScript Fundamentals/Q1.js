function outerFunction(param) {
    let innerVariable = 10;

    function innerFunction() {
        console.log("Inner function accessing parameter:", param);
        console.log("Inner function accessing inner variable:", innerVariable);
    }

    return innerFunction;
}

let innerFn = outerFunction("Hello");

innerFn();
