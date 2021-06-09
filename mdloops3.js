/*criando a tabuada
Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).*/

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let contagem = 0; contagem < num.length; contagem++) {
    for (let mult = 0; mult < num.length; mult++) {
        console.log(num[contagem] + ' x ' + num[mult] + ' = ' + +num[contagem] * num[mult])
        if (num[mult] == 10) {
            console.log(' ')
        }

    }
}