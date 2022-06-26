/* Exercicio 3 - Impar ou par

Crie um programa que determine se um número é impar ou par

Dica do sucesso: todo número par é divisível por 2
*/ 

//let numero = prompt ("Digite o número:")
let numero = 24
console.log(numero);


if(numero%2 == 0) {
    console.log(`O número ${numero} é par`);
}
else {
    console.log(`O número ${numero} é impar`);
}

