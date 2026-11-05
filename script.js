const campoTarefa = document.getElementById("tarefa");
const botaoAdicionar = document.getElementById("adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

botaoAdicionar.addEventListener("click", function () {
    const textoTarefa = campoTarefa.value.trim();

    if (textoTarefa === "") {
        return;
    }

    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = textoTarefa;

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.style.marginLeft = "10px";

    botaoExcluir.addEventListener("click", function () {
        novaTarefa.remove();
    });

    novaTarefa.appendChild(botaoExcluir);
    listaTarefas.appendChild(novaTarefa);

    campoTarefa.value = "";
});