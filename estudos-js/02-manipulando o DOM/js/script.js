//mostra uma janelinha de entrada já convertendo para number
const numero = Number(prompt("digite um numero: "));

//aqui o js pega o elemento que tem esse id e salvar na variavel indicada
const numeroTitulo = document.getElementById('numero-titulo'); 
const texto = document.getElementById('texto');

//aqui eu estou manipulando o DOM (onde está a tag span)
numeroTitulo.innerHTML = numero;

//aqui o restante
texto.innerHTML = '';
texto.innerHTML += `<p>Seu número + 2 é ${numero + 2}.</p>`;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** (1/2)}.</p>`;
