if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function (element) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === element) {
                return true;
            }
        }
        // Return false if the element is not found
        return false;
    };
}

const arr = [1, 2, 3, 4, 5];

console.log(arr.customIncludes(3)); // Output: true
console.log(arr.customIncludes(6)); // Output: false
