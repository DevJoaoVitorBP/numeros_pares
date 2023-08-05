//Criando um programa que percorra uma lista e pegue apenas números pares

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        console.log(numeros[i]);
    }
}

/* Imprimindo uma lista com 5 primeiros números pares.

const numerosPares = [];

for (let i = 0; i < 10; i = i + 2) {
    numerosPares.push(i);
}

console.log(numerosPares);

*/
