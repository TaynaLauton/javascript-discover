/* Control flow */
console.log('a')
console.log('b')

// if e else
let temperatura = 38
if(temperatura >= 37.5) {
  console.log('Febre alta')
}else if(temperatura < 37.5 && temperatura >= 37) {
  console.log('Febre Moderada')
}else {
  console.log('Saudável')
}

// Switch
function calculate(number1, operator, number2){
  let result
  switch(operator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
      console.log('não implementado')
      break
  }
  return result
}

console.log(calculate(4, '*', 4))

// throw

function digaMeuNome(nome = ''){
  if (nome === ''){
    throw 'Nome é obrigatório'
  }

  console.log('depois do erro')
}

// try...catch
try{
  digaMeuNome()
}catch(e){
  console.log(e)
}