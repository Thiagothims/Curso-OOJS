// modularização de código -- generalização para aproveitar o algoritimo/solução

import modifier from "./functions.js"; // utiliza o 'import' para importar as funções do outro arquivo de forma que seja um Objeto. A aplicação dele deve ser utilizando com instancias
import ingredients from "./ingredients.js";

var ingredients2 = ['zebra','tartaruga','leão','anta', 'falcao']



modifier.newCaptalize(ingredients, 'name')

modifier.newCaptalize(ingredients2)





















//console.log(ingredients);
//console.log(salad) print object
//console.log(typeof salad) verificar tipo 
//console.log(ingredients) print object
//console.log(typeof ingredients) verificar tipo
//console.log(ingredients[1].nome) print nome do object 1
//console.log(Array.isArray(ingredients)) //verificar se é um array/vetor


/*
var resultCapitalize = modifier.captalize(ingredients);
var result = modifier.order(ingredients);
var resultUpper = modifier.upperString(result)

console.log(ingredients)

console.log(resultCapitalize);
console.log(result);
console.log(resultUpper);
*/