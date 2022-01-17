//criando um array de json
let data = [/*{
    id: 1,
    title: "estudar html"
},{
    id: 2,
    title: "estudar css"
},{
    id: 3,
    title: "estudar js"
},{
    id: 4,
    title: "estudar git"
}*/];

function renderTodo(){

    document.querySelector('.todo').innerHTML = '';

    //uso de forEach para preencher um array
    data.forEach(task => {

        let li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" id="task-${task.id}">
            <label for="task-${task.id}">${task.title}</label>
            <button type="button">x</button>
        `;

        //evento para modificar o elemento via css
        li.querySelector('input').addEventListener('change', e => {
            
            if(e.target.checked){
                li.classList.add('complete');
            }else{
                li.classList.remove('complete');
            }
        });

        //evento no botão de excluir um item
        li.querySelector('button').addEventListener('click', e => {
            /* pegando o valor do ID da tag input
             * o .split('-') transforma a string em array e aonde foi especificado corta em duas posições
             * e o final [1] retorna a posição especificada */
            let button = e.target;
            let li = button.parentNode;
            let input = li.querySelector('input');
            let id = input.id;
            let idArray = id.split('-')[1];
            let todoId = idArray;
            //todo esse código acima pode ser digitado em uma linha só: 
            // let button = e.target.parentNode.querySelector('input').split('-')[1];

            //pego o nome da tarefa pra colocar na tela de confirmação
            let title = li.querySelector('label').innerText;

            //confirmar se a pessoa quer excluir a tarefa
            if(confirm(`Deseja excluir a tarefa ${title}?`)){
                //aqui ele filtra o array e retorna um novo com os itens atualizados
                data = data.filter(task => task.id !== parseInt(todoId));

                renderTodo();
            }
        });

        document.querySelector('.todo').append(li);
    });

}

//evento que adiciona o que foi recebido pelo input em um elemento no array
document.querySelector('#new-task').addEventListener('keyup', e => {
    
    if(e.key === 'Enter'){

        data.push({
            id: data.length+1,
            title: e.target.value
        });

        e.target.value = '';

        renderTodo();
    }
});

renderTodo();