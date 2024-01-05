//El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]).

let string = prompt ('Ingresa 5 palabras separadas por una coma');

let array = string.split(',');

console.log (array);

//Ejemplo de uso
// Ingresa 5 palabras: Manzana,Fresa,Uva,Sandía,Mango
// Abre la consolsa para ver como el string se convirtió en un array. Resultado: ['Manzana', 'Fresa', 'Uva', 'Sandía', 'Mango']