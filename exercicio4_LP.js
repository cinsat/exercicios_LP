/* Exercicio 4 

Uma comerciante comprou alguns produtos e quer revender com lucro de 45% se o valor da compra foi menor que 20 reais. Caso contrário, o lucro será de 30%. O valor deve ser passado para o programa que deverá retornar o valor da venda.

Exemplo: 
produto: R$ 18,00 -> 18 * 45% -> O seu produto deve ser vendido por R$ 26,10
produto: R$ 21,00 -> 21 * 30% -> O seu produto deve ser vendido por R$ 27,30
*/


//const valorProduto = prompt ("Valor do Produto:");
const valorProduto = 22;
console.log(`O valor do produto é ${valorProduto}`);

const lucro45 = valorProduto*0.45;
const valorVenda45 = valorProduto + lucro45;


const lucro30 = valorProduto*0.35;
const valorVenda30 = valorProduto + lucro30;

if (valorProduto < 20) {
    console.log(`O seu produto deve ser vendido por ${valorVenda45} reais`);
}
else if (valorProduto >= 20) {
    console.log(`O seu produto deve ser vendido por ${valorVenda30} reais`);
}
