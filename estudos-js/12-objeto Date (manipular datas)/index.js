//a função Date() é uma função construtora, irei ver mais funções construtoras mais pra frente. usamos new para trabalhar com funções construtoras
const data = new Date();
console.log(data.toString());

//(ano, mês, hora, minuto, segundo, milisegundos)
//assim o mês é um array, então janeiro começa em zero
console.log("-------------------");
const data2 = new Date(2020, 3, 20, 15, 14, 27, 500);
console.log(data2.toString());

//aqui o mês é referente ao numero normal
console.log("-------------------");
const data3 = new Date('2020-03-20 15:14:27.500');
console.log(data3.toString());

//para obter apenas uma informação especifica
console.log("-------------------");
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); //não esquecer: array sempre começa em zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Dia semana', data.getDay());

console.log("-------------------");
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}
function formataData(data4){
    const dia = zeroAEsquerda(data4.getDate());
    const mes = zeroAEsquerda(data4.getMonth() + 1);
    const ano = zeroAEsquerda(data4.getFullYear());
    const hora = zeroAEsquerda(data4.getHours());
    const min = zeroAEsquerda(data4.getMinutes());
    const seg = zeroAEsquerda(data4.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data4 = new Date();
const dataBrasil = formataData(data4);
console.log(dataBrasil);