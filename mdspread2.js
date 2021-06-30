/*Crie uma função maiorNumero() que receba N parâmetros, e retorne o menor número entre eles, 
utilizando a função Math.min(). Uma observação importante é que a função Math.min() NÃO deve 
receber um array como parâmetro, sendo portanto, necessário expandir os valores.*/


let maiorNumero = function(a) {
    return'Menor numero:'+Math.min(...a)+'\nMaior numero:'+Math.max(...a);
    
}
console.log(maiorNumero([515,511,940,518,761,232,148]))