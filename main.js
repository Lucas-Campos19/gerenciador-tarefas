function salvarDados() {
    let title = document.getElementById("titulo").value;
    let description = document.getElementById("descricao").value;

    let tarefas = localStorage.getItem("tarefas");

    if (tarefas) {
        tarefas = JSON.parse(tarefas);
    }
    else {
        tarefas = [];
    }

    tarefas.push({ titulo: title, description: description });
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    alert('Dados salvos com sucesso');
    exibirDados();
}

function exibirDados() {
    let dadosSalvos = document.getElementById("dadosSalvos");
    dadosSalvos.innerHTML = "";

    let tarefas = localStorage.getItem("tarefas");

    if(tarefas){
        tarefas = JSON.parse(tarefas);
        tarefas.forEach(function (tarefa){
            let card = document.createElement("div");
            card.classList.add("card");

            let tituloElemento = document.createElement("p");
            tituloElemento.textContent = tarefa.titulo;
            card.appendChild(tituloElemento);

            let descriptionElemento = document.createElement("p");
            descriptionElemento.textContent = tarefa.description;
            card.appendChild(descriptionElemento);

            dadosSalvos.appendChild(card);

        });
    }
}

window.addEventListener("DOMContentLoaded", exibirDados());

function alterarModo(){
    let body = document.getElementsByTagName("body")[0];
    body.classList.toggle("dark");

    let toggleButton = document.getElementById("modoDark");
    if(body.classList.contains("dark")){
        toggleButton.textContent = "Modo dia";
    }
    else{
        toggleButton.textContent = "Modo noite";
    }
}