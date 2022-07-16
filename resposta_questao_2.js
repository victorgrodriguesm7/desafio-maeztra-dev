const input = [4,5,44,98,4,5,6,7,1,2,2,3,4,2,5];

const removeDuplicated = (array) => 
    array.filter((number, index, array) => {
        return array.indexOf(number) === index
    })

function getDuplicated(input){
    return removeDuplicated(
        input
            // Valida se o número atual possui o mesmo indice
            // Do indice que é retornado do indexOf
            // Caso um número duplicado apareça
            // o indice retornado será sempre o do primeiro número
            // Após isso removemos os números duplicados que foram adicionados
            // a lista dos duplicados
            .filter((number, index, array) => {
                return array.indexOf(number) !== index
            })
    );
        
}

console.log(getDuplicated(input))