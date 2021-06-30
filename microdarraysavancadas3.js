/*Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”
*/

let numeros =[2,8,4,6,10,12,48,92,68,74]
let sequencia=numeros.reduce(function(acumulador,numero){
return acumulador+' - '+ numero

})

console.log(sequencia)