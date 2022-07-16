const inputs = [
    [1960, 2005],
    [1950, 2004],
    [1949, 2004],
    [1939, 2005],
    [1939, 2005],
    [2004, 2022],
    [2005, 2022],
    [2005, 2022],
];

function getRange(start, finish){
    return Array.from({length: (finish - start )}, (_, i) => start + i);
}

function getYearWithMostWorkers(inputs){
    // Criamos um objeto para salvar a 
    // quantidade de trabalhadores por ano
    const years = {};

    // Para cada trabalhador calculamos
    // os anos em que o mesmo trabalhou
    // e adicionamos no nosso objeto
    inputs.forEach((input) => {
        const [start, finish] = input;

        // Obtém uma lista dos anos trabalhados
        const yearsWorked = getRange(start, finish + 1);

        // Para cada ano trabalhado
        // valida se o ano já existe no nosso objeto years
        // caso exista incrementamos o número de trabalhadores
        // naquele ano
        // caso não, adicionamos o ano com 1 trabalhador
        yearsWorked.forEach((year) => {
            if (Reflect.has(years, year)){
                years[year] += 1;
            } else {
                years[year] = 1;
            }
        })
    });

    // Obtém o pico de trabalhadores registrado
    const workersPeak = Object.values(years)
        .reduce((greater, current) => current > greater ? current : greater, 0);

    // Para cada ano adicionado no objeto years
    // filtra apenas aqueles que tem um número de trabalhadores
    // maior ou igual ao pico registrado
    return Object.keys(years)
        .filter((year) => {
            const workers = years[year];

            return workers >= workersPeak;
        })
}

getYearWithMostWorkers(inputs);