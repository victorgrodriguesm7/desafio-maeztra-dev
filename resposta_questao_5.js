const input = 3;

// Permutação é o fatorial
// do número de itens no conjunto
function factorial(value){
    if (value <= 0) return 1;

    return value * factorial(value - 1);
}

function getAllPossiblePictures(amount){
    // Caso clássico de permutação
    // Precisamos descobrir de quantas maneiras 
    // um conjunto finito (amigos) pode ser organizado
    return factorial(amount)
}

console.log(getAllPossiblePictures(input));