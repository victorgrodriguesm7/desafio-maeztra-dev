const input = [
    "{ [ ( ) ( ) { } [ ] ] { } }", // Certo
    "{ [ ( ( ) ] }", // Errado
    "{ } [ ] ( )", // Certo
    "( ( ) { } [ [ ] )", // Errado
    "() () () () () [{}]" // Certo
]

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
