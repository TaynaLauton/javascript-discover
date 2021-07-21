/* Estruturas de repetição */

// for
// break - para a execução do loop
// continue - pula a execução do momento

for(let i = 1; i <= 10; i++){
  console.log(i)
}

// While

let i = 0
while(i < 10){
  console.log(i)

  i++;
}

// for...of
let nome = 'Tay'
let names = ['João', 'Maria', 'Micaela']

for(let char of nome) {
  console.log(char)
}

for(let nome of names) {
  console.log(nome)
}

// for...in
let person = {
  name: 'Tay',
  age: 26,
  weight: 80.2
}

for(let property in person){
  console.log(property)
}