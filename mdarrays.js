/*Micro desafios
Crie um array que contenha nomes de produtos para compra.
Após isso, exiba no console os resultados das funções relacionadas aos arrays,
que são: Join, Pop, Push, Shift e Unshift.
Também se deve escrever com suas palavras, o que cada função realiza.
Seguem abaixo alguns exemplos.
console.log(“O método Join realiza tal coisa”)
console.log(RESULTADO_DO_JOIN)*/

let listaCompras = [' arroz ', ' feijao ', ' carne ', ' ovos '];

console.log('A função Join tranforma uma array em string , juntando todos os elementos da array e é possivel adicionar caracterres entre os elementos , colocando dentro do parenteses o que se quer adicionar.');
console.log('Resultado de listaCompras.join("-") = ' + listaCompras.join('-'))
console.log(' ')

console.log('A Função Pop retira do array o ultimo elemento e ele pode ser armazenado em outra variavel.');
let excluidos = listaCompras.pop();
console.log('Resultado de listaCompras.pop() = ' + listaCompras);
console.log('Elemento excluido: ' + excluidos);
console.log(' ')

console.log('A função Push adiciona um novo elemento no final do array.');
listaCompras.push(' leite')
console.log('Resultado do push("leite") = ' + listaCompras);
console.log(' ');

console.log('A função Shift retira do array o primeiro elemento e ele pode ser armazenado em outra variavel assim como o pop. ');
excluidos = listaCompras.shift()
console.log('Resultado de listaCompras.shift() =' + listaCompras);
console.log('Elemento excluido: ' + excluidos);
console.log(' ');

console.log('A função Unshift adiciona um novo elemento no inicio do array');
listaCompras.unshift('Peixe')
console.log('Resultado de listaCompras.unshift("Peixe") =' + listaCompras);
