/*Crie um array numerosPrimos e atribua alguns valores a ele que correspondam ao seu nome. 
Além disso, crie outro array, desta vez chamado numeros, que deve conter os valores do array 
numerosPrimos adicionados através do spread, juntos com outros números.*/

let numerosPrimos=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

let numeros=[20,18,16,14,12,10,8,6,4,2,...numerosPrimos]

console.log(numeros)