/* Expressões e Operadores
 
- Expressions
- Operators
    Binary
    Unary
    Ternary
 */

let number = 1;

console.log(number + 1)

console.log(++number)

console.log(false ? 'alo' : 'nada')


/*
  new
  * left-hand-side expression
  * criar um novo objeto
*/

let nome = new String('Tay')
nome.surName = "Lauton"
let age = new Number(23)
console.log(nome.surName, age)

/*
    Operadores unários
    typeof
    delete
*/
console.log(typeof "Tay")

const person = {
  nome: 'Tay',
  age: 25,
}

delete person.age
console.log(person)

/* Operadores Aritméticos */

// multiplicação
console.log(3.2 * 5)
// divisão
console.log(12 / 2)
// soma
console.log(2 + 2)
// subtração
console.log(34 - 23)

// resto da divisão
let remainder
remainder = 11 % 11
console.log(remainder)
// incremento
let increment = 0
increment++
console.log(++increment)
// decremento
let decrement = 1
console.log(--decrement)
// exponencial
console.log(3 ** 3)


// Grouping operator
let total = (2 + 3) * 5
console.log(total)

/* Operadores de Comparação */
// Irá comparar valores e retornar um Boolean como resposta à comparação
let one = 1
let two = 2

//  == igual a
console.log(two == 1)
console.log(one == "1")
//  != diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != "1")
// !===  estritamente igual a
console.log(one === "1")
console.log(one === 1)
// !==  estritamente diferente de
console.log(two !== "2")
console.log(two !== 2)

//  > Maior que
console.log(one > two)
//  >= Maior igual a
console.log(one >= 1)
console.log(two >= 1)
//  < Menor que
console.log(one < two)
//  <= Menor igual que
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)

/* Operadores de Atribuição (Assignment) */
let x

console.log(x)
// assignment
x = 1
console.log(x)
// addition assignment
x += 2
console.log(x)
// subtraction assignment
x -= 2
console.log(x)
// multiplication assignment
x *= 2
console.log(x)
// division assignment
x /= 2
console.log(x)
// remainder, exponetietion
x %= 2
console.log(x)
x **= 2
console.log(x)

/* Operadores lógicos (logical operators) */
// - 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso
let pao = true
let queijo = true

// AND &&
console.log(pao && queijo)
// OR ||
console.log(pao || queijo)
// NOT !
console.log(!pao)

/* Operador Condicional (Ternário) */
// Dependendo da condição, nós recebemos valores diferentes

// condição então valor1 se não valor2
// condition ? value1 : value2

// exemplos
// café da manhã top
let pao = true
let queijo = true

const niceBreackfast = pao && queijo ? 'Café top' : 'Café ruim'
console.log(niceBreackfast)
// Maior de 18
let age = 16
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

/* Operador de String (String operator) */

// comparison (comparação)
console.log('a' == 'b')
// concatenation (concatenação)
// Retorna a união de duas Strings
console.log('a' + 'a')

/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

/* Operator precedence
    Precedência de operadores
  
  * grouping                   ( )
  * negação e incremento       ! ++ --
  * multiplicação e divisão    * /
  * adição e subtração         + -
  * relacional                 < <= > >= >=c
  * igualdade                  == != === !==
  * AND                        &&
  * OR                         ||
  * condicional                ?:
  * assignment (atribuição)    = += -= *= %=
*/