/*Crie uma função construtora chamada Restaurante, que receba como parâmetros o nome do restaurante 
e o cardápio (que será um array de strings).

Após isso chame a função entrada() dentro do objeto, que irá trazer uma mensagem de boas-vindas, 
informando o nome do restaurante, e o cardápio.*/



class Restaurante {
    constructor(nome, cardapio) {
        this.nome = nome;
        this.cardapio = cardapio;
    }
}

let novorestaurante = new Restaurante('Potris', ['bife grelhado', ' arroz', ' feijão', ' salada de rúcula', ' tomate e brócolis cozido']);
novorestaurante.entrada = function () {
    return 'Bem vindo ao restaurante ' + novorestaurante.nome + ' e esse é o nosso cardápio de hoje :' + novorestaurante.cardapio;
}

console.log(novorestaurante.entrada())