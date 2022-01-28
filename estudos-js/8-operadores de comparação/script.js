/*

Operadores de comparação

> maior que
>= maior ou igual
< menor que
<= menor ou igual
=== igualdade estrita (valor e tipo)
!== diferente estrito (valor e tipo)

* funciona mas geralmente não utilizamos porque uma string 10 e um number 10 são diferentes, mas retornaria que são iguais
== igualdade (valor)
!= diferente (valor)


*/

const comparacao = 10 > 5;
const comparacao2 = 10 > 11;
console.log(comparacao, comparacao2); //retorna true ou false (booleano)

const num1 = 13;
const num2 = 11;
const string = '13';

const comparacao3 = num1 === num2;
const comparacao4 = num1 !== num2;
const comparacao5 = num1 === string;
console.log(comparacao3, comparacao4, comparacao5);