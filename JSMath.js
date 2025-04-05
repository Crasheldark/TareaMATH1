//Genera un número aleatorio entre 0 y 100 redondeando y muéstralo por consola
let numAleatorio1 = Math.round(Math.random() * 100);
console.log(numAleatorio1);

//Muestra por consola el valor de PI.
console.log(Math.PI);

//Genera un número aleatorio entre 5 y 10 redondeando y muéstralo por consola. Para  este caso lo recomendado es utilizar la fórmula (Math.random()* (max-min)+min).
let min = 5;
let max = 10;
let numAleatorio2 = Math.round(Math.random() * (max - min) + min);
console.log(numAleatorio2);

//Comprueba el funcionamiento del método sign().
console.log(Math.sign(10))
console.log(Math.sign(-5)); 
console.log(Math.sign(0)); 
console.log(Math.sign(-0));
console.log(Math.sign(NaN));