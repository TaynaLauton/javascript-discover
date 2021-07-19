/* Exercícios - Praticando e Avançando */

// 1. Declare uma variável de nome weight
    var weight;
// 2. Que tipo de dado é a variável acima
    undefined
/* 3. Declare uma variável e atribua valores para cada um dos dados:
    * name: string
    * age: number (integer)
    * stars: number (float)
    * isSubscribe: boolean
*/
    let name = "Tay"
    let age = 18
    let stars = 4.5
    let isSubscribe = true
/*  4. A variável student abaixo é de que tipo de dados? */
      object 
/*    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

    4.2 Mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
 */

    let student = {
      name: 'Tay',
      age: 18,
      weight: 74.5,
      isSubscribe: true
    };

    console.log(student.name + ' de idade ' + student.age + ' pesa ' + student.weight + ' Kg.')

/*  5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio */
      let students = [
        student,
      ];

/*  6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. */
      students = [
        student
      ];

/*  7. Coloque no console o valor da posição zero do Array acima*/
      console.log(student[0]);

/*  8. Crie um novo student e coloque na posição 1 do Array students */

const bia = {
  name: "bia",
  age: 20,
  weight: 65.2,
  isSubscribe: true
};

students = {
  student,
  bia
}
ou
students[1] = bia;

/*  9. Sem rodar o código responda qual é a resposta do código abaixo e por que?
Após sua resposta, rode o código e veja se você acertou.*/

console.log(a)
var a = 1