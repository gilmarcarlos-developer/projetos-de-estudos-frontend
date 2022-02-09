//criando um objeto
const pessoa1 = {
    nome1: 'Fernando',
    sobrenome1: 'Andrade',
    idade1: 32,

    fala(){
        //this se referencia ao objeto que está ocorrendo a ação
        console.log(`${this.nome1} ${this.sobrenome1} está dizendo oi!`);
        console.log(`A minha idade atual é ${this.idade1}`);
    },

    incrementaIdade(){
        this.idade1++;
    }
};
//acessando um valor do objeto
console.log(pessoa1.nome1);

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

/*-------------------------*/
//posso criar uma função que cria um objeto
function criaPessoa(nome, sobrenome, idade){
    //retorna um objeto
    return{
        nome,
        sobrenome,
        idade
    };
}

const pessoa2 = criaPessoa('Gilmar', 'Carlos', 24);
const pessoa3 = criaPessoa('Marcelo', 'Oliveira', 28);
const pessoa4 = criaPessoa('Renata', 'Picon', 31);

console.log(pessoa2.nome);
console.log(pessoa3);