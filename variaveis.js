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

/* var é global e poderá funcionar fora de um escopo de bloco */
console.log('> existe x depois do bloco?', x)
{
  var x = 0;
}
console.log('> existe x depois do bloco?', x)

/* const e let são locais e só funcionam no escopo onde foi criada */
{
  console.log('> existe y antes do bloco?', y)
  let y = 0;
}
console.log('> existe y depois do bloco?', y)

/* Para criar nomes 
 - JS é case-sensitive(sensível ao caso)
 - JS aceita a cadeia de caracteres Unicode

 * Posso:
    - Iniciar com esses caracteres especiais: $ _
    - Iniciar com letras
    - Colocar acentos
    - Letras maísculas e minúsculas fazem diferença

  * Não posso:
    - Iniciar com númes
    - Colocar espaços vazios no nome

  * Ideal:
    - Criar nomes que fazem sentido
    - Que explique o que a variável é ou faz
    - camelCase
    - snake_case
    - Escrever em inglês
*/