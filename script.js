const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Depois de uma semana cheia, você finalmente tem um tempo livre. O que decide fazer?",
        alternativas: [
            {
                texto: "Dormir até mais tarde e assistir algo relaxante.",
                afirmacao: "Aprendeu que o descanso também é parte essencial do autocuidado. "
            },
            {
                texto: "Faz uma caminhada leve e separa um momento só para você.",
                afirmacao: "Percebeu que o movimento e o silêncio são grandes aliados do seu bem-estar. "
            }
        ]
    },
    {
        enunciado: "Você está ansioso com muitas tarefas acumuladas. Como reage?",
        alternativas: [
            {
                texto: "Faz uma lista de prioridades e respira fundo para começar com calma.",
                afirmacao: "Passou a entender que organização reduz o estresse e melhora sua rotina. "
            },
            {
                texto: "Evita o assunto e tenta se distrair com redes sociais.",
                afirmacao: "Notou que fugir do problema não resolve, mas aprendeu a escutar melhor seus sentimentos. "
            }
        ]
    },
    {
        enunciado: "Durante uma aula, o professor fala sobre autocuidado emocional. O que você pensa?",
        alternativas: [
            {
                texto: "Se interessa pelo assunto e pesquisa mais sobre meditação e relaxamento.",
                afirmacao: "Descobriu que cuidar da mente é tão importante quanto cuidar do corpo. "
            },
            {
                texto: "Não dá muita atenção no momento, mas depois fica pensando sobre isso.",
                afirmacao: "Mesmo sem agir de imediato, começou a refletir mais sobre sua saúde emocional. "
            }
        ]
    },
    {
        enunciado: "Um(a) amigo(a) está sempre cansado(a) e irritado(a). Como você lida com isso?",
        alternativas: [
            {
                texto: "Convida para caminhar ou conversar em um lugar calmo.",
                afirmacao: "Entendeu que oferecer apoio pode ajudar muito no processo de autocuidado do outro. "
            },
            {
                texto: "Respeita o momento da pessoa e continua cuidando da sua própria rotina.",
                afirmacao: "Percebeu que cuidar de si inspira os outros a fazerem o mesmo. "
            }
        ]
    },
    {
        enunciado: "Você percebe que sua rotina está corrida e quase não tem tempo pra si. O que faz?",
        alternativas: [
            {
                texto: "Começa a separar ao menos 15 minutos por dia para algo que te faça bem.",
                afirmacao: "Descobriu que até pequenas pausas fazem diferença para manter a saúde mental. "
            },
            {
                texto: "Sente dificuldade em mudar, mas começa a observar como isso tem te afetado.",
                afirmacao: "Mesmo sem ações imediatas, percebeu que precisa olhar mais para si com carinho. "
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu caminho de autocuidado até aqui...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
