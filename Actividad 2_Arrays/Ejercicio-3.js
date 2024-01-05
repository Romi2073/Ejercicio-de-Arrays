let array = [10,40,30,20,15,5];

// Arreglo ordenado de menor a mayor
array.sort(function(a, b) {
    return a - b;
});

console.log("menor a mayor", array);

// Número menor
console.log(Math.min.apply(null, array));
// Número mayor
console.log(Math.max.apply(null, array));