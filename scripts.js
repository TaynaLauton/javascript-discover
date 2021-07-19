/*
  Prototype

  * prototype-based language
  * prototype chain
  * __proto__
*/

/*
  Type conversion (typecasting) vs Type coersion

  *Alteração de um tipo de dado para outro tipo
*/
console.log('9' + 5)
console.log(Number('9') + 5)

// Manipulando Strings e Números  --  Transformando String em Número e Número em String
let string = '123'
console.log(Number(string))
let number = 321
console.log(String(number))

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number = 548.5885458748
console.log(number.toFixed(2).replace(".", ","))

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também
let word = "Programar é muito bacana!"
console.log(word.toLowerCase())
console.log(word.toUpperCase())

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
let phrase = "Eu quero viver o Hoje!"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
