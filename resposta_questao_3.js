const input = [
    "{ [ ( ) ( ) { } [ ] ] { } }", // Certo
    "{ [ ( ( ) ] }", // Errado
    "{ } [ ] ( )", // Certo
    "( ( ) { } [ [ ] )", // Errado
    "() () () () () [{}]" // Certo
]

// A maneira mais fácil para resolver esse problema 
// é utilizar de uma pilha, a cada caracter de abertura 
// (, [, { nós o adicionamos na pilha
// sempre que encontrarmos uma tag de fechamento que seja a mesma 
// que o topo da pilha, então o desempilhamos
// Por exemplo se tivermos:
// [ ( ) ]
// Primeiro adicionamos o [ a pilha
// e logo em seguida o (
// Assim que encontramos a tag de fechamento "("
// verificamos se é o fechamento correspodente a que está no topo
// como ela é o fechamento então desempilhamos
// e fazemos o mesmo processo com o colchete
// Caso ao final da nossa função a nossa Pilha
// tenha algum valor, quer dizer que a nossa entrada é inváçida
class Stack {
    stack = [];

    get currentValue(){ 
        return this.stack[this.stack.length - 1];
    }

    get length(){
        return this.stack.length
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        this.stack.pop();
    }
}

const CLOSE_BRACKETS = [
    "}",
    "]",
    ")"
];
const OPEN_BRACKETS = [
    "{",
    "[",
    "("
];

function isCloseBrackets(bracket){
    return CLOSE_BRACKETS.includes(bracket);
}

function isOpenBrackets(bracket){
    return OPEN_BRACKETS.includes(bracket);
}

function getOpenBracket(bracket){
    if (bracket === "}") return "{";
    if (bracket === "]") return "[";
    if (bracket === ")") return "(";

    return null;
}


function isBracketsValid(rawBrackets){
    const stack = new Stack();
    const brackets = rawBrackets.split('');

    brackets
        .forEach((bracket) => {
            if (isOpenBrackets(bracket)){
                stack.push(bracket)
            } else if (isCloseBrackets(bracket)) {
                const openBracket = getOpenBracket(bracket);
                if (stack.currentValue === openBracket){
                    stack.pop()
                }
            }
        })

    return stack.length == 0;
}


input.forEach((input) => {
    console.log(isBracketsValid(input) ? "Válido" : "Inválido");
})
