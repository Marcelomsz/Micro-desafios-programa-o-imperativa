/*Crie um array com valores diversos, percorra-o, altere e mostre seus elementos:*/

let lista = [1, 2, 'a', 'b', true, false]

for (i = 0; i < lista.length; i++) {
    console.log(lista[i])
}
lista.pop();
lista.shift();
lista.unshift(9);
lista.push(true)
