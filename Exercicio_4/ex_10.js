// 10. Lista de tarefas

const tarefas = ['Lavar a louça []', 'Estudar JavaScript [x]', 'Fazer compras [x]', 'Limpar a casa []'];

const tarefasConcluidas = tarefas.filter((tarefa) => {
    return !tarefa.includes('[x]'); //Retorna só as tarefas que não estão concluídas
});

console.log(`Tarefas concluídas: ${tarefasConcluidas}`);