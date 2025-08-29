// Definindo os elementos do DOM
const storyTextElement = document.getElementById('story-text');
const optionsContainer = document.getElementById('options-container');

// A história é um objeto onde cada chave é um "estado" do jogo.
const states = {
    start: {
        text: 'Você está no limite da Floresta Sussurrante, conhecida por suas árvores que parecem falar. Uma velha placa indica dois caminhos. Qual você escolhe?',
        options: [
            { text: 'Pegar o caminho da direita, que parece bem iluminado.', nextState: 'pathRight' },
            { text: 'Entrar na escuridão do caminho da esquerda.', nextState: 'pathLeft' }
        ]
    },
    pathRight: {
        text: 'Você caminha por um tempo e chega a uma clareira com um rio. A ponte de madeira está quebrada. Você pode tentar atravessar o rio ou seguir o seu curso.',
        options: [
            { text: 'Tentar atravessar o rio, pulando sobre pedras.', nextState: 'crossRiver' },
            { text: 'Seguir o rio em busca de uma passagem mais fácil.', nextState: 'followRiver' }
        ]
    },
    pathLeft: {
        text: 'A escuridão da floresta te envolve. De repente, você ouve um sussurro vindo de um arbusto. Você pode investigar ou ignorar.',
        options: [
            { text: 'Investigar o arbusto.', nextState: 'investigateBush' },
            { text: 'Ignorar o som e continuar em frente.', nextState: 'ignoreSound' }
        ]
    },
    crossRiver: {
        text: 'Você pisa em uma pedra escorregadia, cai na água gelada e é arrastado pela correnteza. Fim da aventura.',
        options: [
            { text: 'Recomeçar', nextState: 'start' }
        ]
    },
    followRiver: {
        text: 'Seguindo o rio, você encontra uma cabana abandonada. Dentro, há um mapa que leva a um tesouro. Você venceu!',
        options: [
            { text: 'Recomeçar', nextState: 'start' }
        ]
    },
    investigateBush: {
        text: 'Você encontra um coelho assustado. O susto faz você tropeçar e cair em um buraco. Fim da aventura.',
        options: [
            { text: 'Recomeçar', nextState: 'start' }
        ]
    },
    ignoreSound: {
        text: 'Você ignora o sussurro e continua. O caminho se abre para uma cidade vizinha. Você conseguiu sair da floresta. Você venceu!',
        options: [
            { text: 'Recomeçar', nextState: 'start' }
        ]
    }
};

// Variável para armazenar o estado atual do jogo
let currentState = 'start';

// Função para exibir o estado atual
function displayState() {
    const state = states[currentState];
    storyTextElement.textContent = state.text;

    // Limpa os botões anteriores
    optionsContainer.innerHTML = '';

    // Cria e exibe os novos botões
    state.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.classList.add('option-button');
        button.addEventListener('click', () => {
            selectOption(option.nextState);
        });
        optionsContainer.appendChild(button);
    });
}

// Função para processar a escolha do jogador
function selectOption(nextState) {
    currentState = nextState;
    displayState();
}

// Inicia o jogo
displayState();