// modularização de código -- generalização para aproveitar o algoritimo/solução

import modifier from "./functions.js"; // utiliza o 'import' para importar as funções do outro arquivo de forma que seja um Objeto. A aplicação dele deve ser utilizando com instancias
import ingredients from "./ingredients.js";

/* TESTES
var ingredients02 = ['leão','zebra','elefante','pinguim','macaco','tigre','antilope','jacaré'] // para teste de array na função newCaptalize()
 modifier.newCaptalize(ingredients02)

modifier.newCaptalize(ingredients, 'name');
modifier.newOrder(ingredients, 'name')
*/

let ingredientsOrder = modifier.newOrder(ingredients, 'name');
let listIngredients = modifier.newCaptalize(ingredientsOrder, 'name');
let containerIngredents = document.querySelector('div#container');

console.log(listIngredients)

// percorrer vetor, forma mais moderna

for (let ingredient of ingredientsOrder) {
    let text = `
    <div class="ingredient">
        <img src="_images/${ingredient.img}"/>
        <p class="name">${ingredient.name}</p>
    </div>
    `;
    containerIngredents.innerHTML += text
}


/*
EXEMPLO
div pai => 'container
<div class="ingredients">
    <img src="image"/>
    <p class="name" alt="description" />
</div>*/