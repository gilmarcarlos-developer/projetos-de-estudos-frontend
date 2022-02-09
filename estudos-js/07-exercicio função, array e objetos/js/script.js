//essa função "protege" as váriaveis do meu script para evitar conflitos
function Escopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    //adicionando um evento no botão de envio para evitar de enviar o formulário e recarregar a página
    function recebeEventoForm(event){
        event.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //crie um objeto e já o coloquei no array
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}, ${peso.value}kg, ${altura.value} de altura</p>`;
        
    }
    form.addEventListener('submit', recebeEventoForm);
}

Escopo();