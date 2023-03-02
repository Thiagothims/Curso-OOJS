// refatorar/refactor para realizar alteraçãoes em vetores contendo objects
function newCaptalize(colection, attr) {
    
    if (typeof colection[0] == 'object') {
        var newColection = colection.map(function(obj) {
            var letterInitial = obj[attr].charAt(0).toUpperCase();
            var restString = obj[attr].slice(1);

            obj[attr] = letterInitial + restString;
            
            return obj;
        });
        console.log(newColection)

    } else {
        var newColection = colection.map(function(array) {
            var letterInitial = array.charAt(0).toUpperCase();
            var restString = array.slice(1);

            array = letterInitial + restString

            return array;
        })
        console.log(newColection);        
    }
}


function newOrder(colection, attr=null) {
    return attr ?
    colection.sort(function(a,b){
        return typeof a[attr] == 'number' ?
            a[attr] - b[attr] :
            a[attr].localeCompare(b[attr])        
        }):
    colection.sort(function(a, b){
        return typeof a == 'number' ?
        a - b :
        a.localeCompare(b)
    });
}


/*


function captalize(array) {
    var modifiedCap = [];
    
    for (var i = 0; i < array.length; i++) {
        // captalize array
        var letterInitial = array[i].charAt(0).toUpperCase();
        var restString = array[i].slice(1);
        var result = letterInitial + restString;

        modifiedCap[i] = result;
    }

    return modifiedCap;
};


function order(array) {
    // order array
    //console.log(newArrayIngred.sort()) // ordenação pronta, não funciona se a palavra tiver acent(latino)
    return array.sort(function(a,b) {
        return a.localeCompare(b); // localeCompare() - faz comparação com caracter latino (acentuados)
    });
}

function upperString(array) {
    var modified = [];
    for (var i = 0; i < array.length; i++) {
        modified[i] = array[i].toUpperCase();
    }
    return modified;
}*/


export default {
    /*captalize: captalize,
    order: order,
    /*upperString: upperString,*/
    newCaptalize: newCaptalize,
    newOrder: newOrder
};