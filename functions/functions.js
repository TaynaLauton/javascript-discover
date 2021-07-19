// function expression
// function anonymus

//parâmetros (parameters)
const sum = function(number1, number2){
  let total = number1 + number2
  return total
}

sum(2, 3)   // arguments - argumentos


// function scope

let subject = 'create video'

function createThink(subject) {
  subject = 'study'
  return subject
}

console.log(subject)
console.log(createThink(subject))


// function hoisting

sayMyName()

function sayMyName(){
  console.log('Tay')
}

// arrow function

const sayMyName = () => {
  console.log('Tay')
}

sayMyName()


// callback function

function sayMyName(name) {
  console.log(name)
}

sayMyName(
  () => {
    console.log('estou em uma callback')
  }
)

/*
  Function() constructor

  * espressão new
  * criar um novo objeto
  * this keyword
*/
function Person() {
  this.nome = nome
}
const tay = new Person("Tay")
const maria = new Person("Maria")
console.log(tay)
console.log(maria)