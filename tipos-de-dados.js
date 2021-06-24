/*
String - Cadeia de Caracteres

"" // Aspas duplas
'' // Aspas simples
`` // template literals ou template strings
*/
console.log('Tay');

/*
Number - Números

33 // Inteiros
12.5 // reais - float
NaN // Not a Number
Infinity // infinito
*/

console.log(12.5 / 5);
console.log(12.5 === Infinity);

/*
Boolean - somente 2 valores

true // verdadeiro
false // false
*/
console.log(false);
console.log(true);

/*
Undefined - Indefinido
null - nulo, objeto que não possui nada dentro, diferente de indefinido
*/
console.log(undefined === null);

/*
Object
objeto
propriedades / atributos
funcionalidades / métodos

{ propriedade: "valor"}
*/
console.log({
  name: "Tay",
  idade: 36,
  andar: function(){
    console.log('andar')
  }
})

/*
Array(vetores)
uma lista
agrupamento de dados

["Tay",26]
*/
console.log([
  "Leite",
  "Ovos",
  2,
  4
])

/****Conclusão****/
/**
 Conforme o ECMAScript standard temos 9 tipos de dados:
 - Data types
    * Primitive / Primitive value
    * Structural
    * Structural Primitive
  
  * Primitivos
    - String
    - Number
    - Boolean
    - Undefined
    - Symbol
    - BigInt
  
  * Estruturais
    - Object
      - Array
      - Map
      - Set
      - Date
      - ...
    - Function

  * Primitivo Estrutural
    - null
 */