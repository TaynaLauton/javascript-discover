/*
Variáveis
- Nomes simbólicos para receber algum valor
- Atalhos de código
- Identificadores
- 3 palavras reservadas para criar uma variável
  -- var
  -- let
  -- const
*/
var clima = "Quente"
clima = "Frio"
console.log(clima)

let clima = "Quente"
clima = "Frio"
console.log(clima)

const temperatura = "normal"
console.log(temperatura)

/*
O JS é uma linguagem fracamente tipada e dinâmica.
- Variáveis não precisam ter um tipo previamente definido
- Podemos mudar o conteudo da variável
*/

/*
  Escope
  - Escopo determina a visibilidade de alguma variável no JS

  Block stantement
  ``` js
  // vamos iniciar um bloco
  {
    // aqui dentro é um bloco e posso colocar qualquer código
  } // aqui fechamos o bloco
  ```
  O bloco, também criará um novo escopo. Chamamos de `block-scoped`
*/
{
  let x = 0
  console.log(x)
}
