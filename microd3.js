/*Crie outro array, percorra-o, altere, salve e exiba seus elementos:
Obs: Neste exercício, utilize funções e domínios separados, ou seja, salvar é uma coisa e exibir
 é outra. Sendo assim, nem tudo deve ser feito junto.*/


let lista = [1, 2, 'a', 'b', true, false]

function mostrar(i) {
    console.log(lista[i])
}

function alterar(i) {
    lista[i] = "teste : " + lista[i]
}
for (let i = 0; i < lista.length; i++) {
    alterar(i)
    mostrar(i)
}



