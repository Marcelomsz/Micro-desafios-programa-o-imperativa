/*Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
*/

let pares=[2,8,4,6,10,12,48,92,68,74]
let impares=pares.map(function(n) {
    return n+1
    
})
console.log(impares)