//----- trabalhando com funções (básico)

//criando uma função
function saudacao(){
    console.log('1. Bom dia!');
}


//uma função que recebe um parametro
function outraSaudacao(nome){
    console.log(`2. Bom dia, ${nome}!`);
}


//chamando a função
saudacao();
outraSaudacao('Fernando');

//função retornando um valor
function retornaValor(nome){
    return `3. Bom dia ${nome}!`;
}
const variavel = retornaValor('Gilmar');
console.log(variavel);

//outro exemplo
function soma(x, y){
    const resultado = x + y;
    return `a soma de ${x} + ${y} é igual a ${resultado}`;
}
console.log(soma(2, 3));

//agora declarando uma variavel que já recebe o valor de uma função
const raiz = function(numero){
    return `a raiz quadrada de ${numero} é igual a ${numero ** 0.5}`;
};

console.log(raiz(9));
console.log(raiz(25));

//arroz function, funciona do mesmo jeito só que de uma maneira mais simples
const raiz2 = (numero2) => {
    return `a raiz quadrada de ${numero2} é igual a ${numero2 ** 0.5}`;
};

console.log(raiz2(9));
console.log(raiz2(25));

//e poderia ter sido escrita assim também
const raiz3 = numero3 => `a raiz quadrada de ${numero3} é igual a ${numero3 ** 0.5}`;
console.log(raiz3(16));