
const inputs = ["12345678", "1223455678", "876543210", "12356789", "13579","9765421","123454321","12222222","2111111", "1599"];

// Tipos de ordenação
// Crescente ou Descrescente
const OrderType = {
    "asc": "ASC",
    "desc": "DESC"
}

function isOrdered(inputs){
    // Inicia o tipo de Ordenação como undefined
    // Vamos descobrir a ordenação apenas após comparar os 2 primeiros números
    // Depois de comparar eles salvamos se eles estão em ASC ou DESC
    // Durante o loop precisamos validar se eles mantém essa ordem
    let order;

    const input = inputs.split('');
    const length = input.length;

    // Iniciamos sempre a lista como ordernada
    let isOrdered = true;
    // Vamos iterar apenas até o penúltimo elemento
    // Como estamos pegando sempre o próximo elemento junto do atual
    // evita erros
    for (let i = 0; i < (length - 1); i++){
        // Caso esteja fora de ordem saimos do loop
        // para evitar comparações desnecessárias
        if (!isOrdered) break;

        const value = parseInt(input[i]);
        const next = parseInt(input[i+1]);

        // Caso possua uma ordenação definida
        // verificamos se a diferença entre o valor atual e o próximo é 1
        // e se o Primeiro valor é maior que o próximo (Caso decrescente)
        // ou se o Primeiro é menor que o próximo (Caso crescente)
        if (order != undefined){
            if (order === OrderType.asc){
                // console.log(value, next,(next - value))
                isOrdered = next >= value && (next - value) <= 1
            } else {
                isOrdered =  next <= value &&  (value - next) <= 1
            }
        } else {
            // Caso não tenhamos Ordem definida
            // Comparamos os dois primeiros númeors e salvamos essa ordem
            order = next >= value ? OrderType.asc : OrderType.desc;
        }
    }

    return isOrdered;
}

inputs.forEach((input) => {
    console.log(`input ${input} ->`,isOrdered(input) ? "Está ordenado" : "Não está ordernado")
})