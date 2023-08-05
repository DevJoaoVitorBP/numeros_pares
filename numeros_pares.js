//Criando um programa que percorra uma lista e pegue apenas números pares

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numero.length; i++) {
    if (numero[i] % 2 == 0) {
        console.log(numero[i]);
    }
}