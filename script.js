const campoTarefa = document.getElementById("tarefa");
const botaoAdicionar = document.getElementById("adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

// Recupera as tarefas salvas.
// Se não existir nenhuma, começa com uma lista vazia.
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// Cria uma tarefa na página.
function criarTarefa(textoTarefa) {
    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = textoTarefa;

    // Clicar na tarefa marca como concluída.
    novaTarefa.addEventListener("click", function () {
        novaTarefa.style.textDecoration = "line-through";
    });

    // Cria o botão Excluir.
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.style.marginLeft = "10px";

    // Exclui a tarefa da tela e do localStorage.
    botaoExcluir.addEventListener("click", function () {
        const indice = tarefas.indexOf(textoTarefa);

        if (indice !== -1) {
            tarefas.splice(indice, 1);
            localStorage.setItem("tarefas", JSON.stringify(tarefas));
        }

        novaTarefa.remove();
    });

    novaTarefa.appendChild(botaoExcluir);
    listaTarefas.appendChild(novaTarefa);
}

// Mostra as tarefas que já estavam salvas.
tarefas.forEach(function (tarefa) {
    criarTarefa(tarefa);
});

// Adiciona uma nova tarefa.
botaoAdicionar.addEventListener("click", function () {
    const textoTarefa = campoTarefa.value.trim();

    // Não permite tarefa vazia.
    if (textoTarefa === "") {
        return;
    }

    // Guarda a tarefa no array.
    tarefas.push(textoTarefa);

    // Salva no navegador.
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    // Mostra na página.
    criarTarefa(textoTarefa);

    // Limpa o campo.
    campoTarefa.value = "";
});

// Permite adicionar usando Enter.
campoTarefa.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        botaoAdicionar.click();
    }
});