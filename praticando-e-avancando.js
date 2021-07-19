/* Variáveis e tipos de dados (declaração or declaration) */
var person;

/* assignment or atribuição de valores */
person = "Tay"

/* Que tipo de dado foi colocado na variável */
console.log(typeof person);

/* agrupamento de declarações */
let age, isHuman

age = 26
isHuman = true

/* multiplos argumentos na função */
console.log(person, age, isHuman)

/* Escrita de texto + variáveis (Contatenando os valores) */
console.log('o ' + person + ' tem ' + age + ' anos.')

/* interpolando valores com template literals or template strings */
console.log(`o ${person} tem ${age} anos.`)

/* Object */

const person = {
  name: 'João',
  age: 30,
  weight: 88.6,
  isAdmin: true
}
console.log(person.age)

/* Array */

const animals = [
  'Lion',
  'Monkey',
  'Cat'
]
// acessando valores dentro do Array
console.log(animals[1])