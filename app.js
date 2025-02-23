//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let amigos = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo");
    let nome = nomeInput.value.trim(); // trim remove espaços extras

    if (nome !== "" && !amigos.includes(nome)) {
        amigos.push(nome); // Adiciona ao array
        atualizarLista();
        nomeInput.value = ""; // Limpa o input
    } else {
        alert("Digite um nome válido ou que ainda não foi adicionado!");
    }
}

// Função para atualizar a lista na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para o sorteio!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceSorteado];

    exibirResultado(amigoSecreto);
    dispararConfetes(); // Dispara os confetes após o sorteio
}

// Função para exibir o resultado na tela
function exibirResultado(amigoSecreto) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpa o resultado anterior

    let item = document.createElement("li");
    item.textContent = `🎉 O amigo secreto sorteado é: ${amigoSecreto} 🎁`;
    listaResultado.appendChild(item);
}

// Função para disparar os confetes
function dispararConfetes() {
    confetti({
        particleCount: 1000, // Quantidade de confetes
        spread: 70, // Abertura dos confetes
        origin: { y: 0.6 }, // Início da animação (cai de cima)
        colors: ['#ff0', '#ff007f', '#4caf50', '#2196f3'] // Cores dos confetes
    });
}
