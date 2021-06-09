/*Contando números ímpares
Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números 
ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os 
números das repetições no console.*/
let impares = [];
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let repeticoes = 0; repeticoes < 10; repeticoes++) {

    if (num[repeticoes] % 2 != 0) {
        impares.push(num[repeticoes])

    }

}
console.log('Os numeros :' + impares + ' são impares')