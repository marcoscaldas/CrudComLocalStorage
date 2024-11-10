//FUNCAO PARA LIMPAR O LOCALSTORAGE

function limparLocalStorage(){
    localStorage.clear();
    //ATUALIZAR A LISTA DE TAREFAS
    carregarTarefas();
    alert('Todas as tarefas foram removidas!')
}

//CARREGAR AS TAREFAS DO LOCALSTORAGE
function carregarTarefas(){

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const listaDeTarefas = document.getElementById('listaDeTarefas');
    listaDeTarefas.innerHTML = '';

    tarefas.forEach( (tarefa, indice) =>{
    const elementoTarefa = document.createElement('div');    
    elementoTarefa.className = 'task';
    elementoTarefa.innerHTML = `
        <span>${tarefa}</span>
        <button onclick="editarTarefa(${indice})">Editar</button>
        <button onclick="excluirTarefa(${indice})">Excluir</button>
        `;
        listaDeTarefas.appendChild(elementoTarefa);
    });
}

//ADICIONAR TAREFAS
function adicionarTarefa(){
    const inputTarefa = document.getElementById('taskInput');
    const tarefa = inputTarefa.value.trim();
    
    if(tarefa){
        const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
        tarefas.push(tarefa);
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        inputTarefa.value = ' ';
        carregarTarefas();
    }else{
        alert('Digite uma tarefa!');
    }
}
function editarTarefa(indice){
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const notaTarefa = prompt('Edite a tarefa: ', tarefas[indice]);

    if(notaTarefa !== null && notaTarefa.trim() !== ' '){
        tarefas[indice] = notaTarefa;

        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        carregarTarefas();
    }
}

//FUNCAO EXCLUIR

function excluirTarefa(indice){
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.splice(indice, 1);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    carregarTarefas();
}


carregarTarefas();