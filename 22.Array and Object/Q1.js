const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' at the beginning if it's not already in the cart
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// Add 'Sugar' at the end if it's not already in the cart
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// Remove 'Honey' if allergic
const allergicToHoney = true;
if (allergicToHoney) {
    const indexToRemove = shoppingCart.indexOf('Honey');
    if (indexToRemove !== -1) {
        shoppingCart.splice(indexToRemove, 1);
    }
}

// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);
