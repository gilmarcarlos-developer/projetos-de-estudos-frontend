//----- trabalhando com arrays (básico)

//declarando um array
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos[1]);

//atribuindo novo valor a posição 1
alunos[1] = 'Eduardo';
console.log(alunos[1]);

//inserindo um novo valor no fim do array
//length pega o tamanho do array
alunos[alunos.length] = 'José';
console.log(alunos);

//inserindo com uma função
alunos.push('Marcelo');
console.log(alunos);

//função para adicionar no começo do array
alunos.unshift('Fernando');
console.log(alunos);