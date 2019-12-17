// Truthy and falsy values and equality operators

// falsy values: undefinde, null, 0, '', NaN
// trythy values: NOT falsy values, all values true in a if else statement

var height;

height = 23;

if (height || height === 0) {
    console.log('This variable is defined');
} else {
    console.log('This variable is NOT defined');
}
// This example is good for checking if a variable is defined and has values



// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion');
} 