var ingredients = ['vinagar', 'water', 'honey', 'salt', 'mustard'];

function captalize(ingredients) {
    var modifinedCap = [];

    for (var i = 0; i < ingredients.length; i++) {
        // captalize array
        var letterInitial = ingredients[i].charAt(0).toUpperCase();
        var restString = ingredients[i].slice(1);
        var result = letterInitial + restString;

        modifinedCap[i] = result;
    }

    return modifinedCap;
}

function order(ingredients) {
    // order array
    //console.log(newArrayIngred.sort()) // ordenação pronta, não funciona se a palavra tiver acent(latino)
    return ingredients.sort(function(a,b) {
        return a.localeCompare(b); // localeCompare() - faz comparação com caracter latino (acentuados)
    })
}

var resultCap = captalize(ingredients);
var result = order(resultCap);


console.log(resultCap)
console.log(result)


/*
var ingredients = ['water', 'honey', 'salt', 'mustard']; // array fora de ordem, maneira procedural

// console.log(ingredients) -- apresenta array sem ordenação e captalize

function orderCaptalize(ingredients) {
    var newArrayIngred = [];

    for (var i = 0; i < ingredients.length; i++) {
        // captalize array
        var letterInitial = ingredients[i].charAt(0).toUpperCase();
        var restString = ingredients[i].slice(1);
        var ingredientsCap = letterInitial + restString;

        newArrayIngred[i] = ingredientsCap;

        // order array
        //console.log(newArrayIngred.sort()) // ordenação pronta, não funciona se a palavra tiver acent(latino)
        var newArrayOrder = newArrayIngred.sort(function(a, b) {
            return a.localeCompare(b); // localeCompare() - faz comparação com caracter latino (acentuados)
        })
    }

    return newArrayOrder
}

console.log(orderCaptalize(ingredients))
*/