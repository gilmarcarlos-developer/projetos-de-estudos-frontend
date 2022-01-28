/*

--- Estrutura condicional ---

if (se a expressão for verdadeira){
    executa o bloco de código
}else if (caso essa expressao for verdadeira){
    execute esse bloco
}else{
    caso contrário, execute esse bloco
}

a estrutura condicional é encerrada assim que encontrar a PRIMEIRA opção verdadeira, o que faz com que os else if seguintes não sejam lidos ao encontrar o primeiro verdadeiro

*/

const hora = 10;

if(hora >= 0 && hora <= 12){
    console.log("bom dia");
}else if(hora > 12 && hora <= 17){ 
    console.log("boa tarde");
}else if(hora > 17 && hora < 24){ 
    console.log("boa noite");
}else{
    console.log("hora inválida");
}