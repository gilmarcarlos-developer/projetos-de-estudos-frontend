/* 

Primitivos (imutáveis): string, number, boolean, undefined, null (bigint, symbol)

  * quando se usa o sinal de atribuição (=), eles são copiadas de uma variável para outra, então são independentes um do outro

Por referência (mutável): array, object, function
 
  * enquanto os por referencia pegam a posição em que está aquele valor, e qualquer mudança feita em um, afeta o outro
  * para copiar o valor sem ser por referencia, é só usar 
  " let a = [1, 2, 3];
    let b = [...a]; "

*/