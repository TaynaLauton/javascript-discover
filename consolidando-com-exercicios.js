/*
  Vamos fortalecer e aplicar os conhecimentos, além de aprender truques e dicas para resolver os desafios e avançar para o próximo nível
*/

/* ### Transformar notas escolares
  Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

  * de 90 para cima - A
  * entre 80 - 89   - B
  * entre 70 - 76   - C
  * entre 60 - 69   - D
  * menor que 60    - F

*/
let nota = 75

if(nota >= 90) {
  console.log('A')
}else if(nota >= 80 && nota <= 89) {
  console.log('B')
}else if(nota >= 70 && nota <= 79) {
  console.log('C')
}else if(nota >= 60 && nota <= 69) {
  console.log('D')
}else if(nota < 60) {
  console.log('F')
}