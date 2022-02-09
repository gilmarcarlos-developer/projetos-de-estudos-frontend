/*

Muito útil para encurtar o seu código em situações que usaria um if/else

estrutura:

(condicao) ? 'valor verdadeiro' : 'valor false';
*/

//exemplo: se meu usuario tiver uma pontuação >= 1000, ele é um usuário vip, caso contrário, é um usuário normal

const pontuacaoUsuario = 999;

//solução com o if/else
if(pontuacaoUsuario >= 1000){
    console.log('Usuário VIP');
}else{
    console.log('Usuário normal');
}

//solução com operador ternário
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);