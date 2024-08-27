const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual bandeira é esta?",
        imagem: "eslovaquia.png", 
        alternativas: [
            {
                texto: "Croácia",
                afirmacao: "errado"
            },
            {
                texto: "Eslováquia",
                afirmacao: "certo"
            },
            {
                texto: "Eslovênia",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "Qual bandeira é esta?",
        imagem: "mali.png", 
        alternativas: [
            {
                texto: "Guiné",
                afirmacao: "errado"
            },
            {
                texto: "Senegal",
                afirmacao: "errado"
            },
            {
                texto: "Mali",
                afirmacao: "certo"
            }
        ]
    },
    {
        enunciado: "Qual bandeira é esta?",
        imagem: "dinamarca.png",
        alternativas: [
            {
                texto: "Noruega",
                afirmacao: "errado"
            },
            {
                texto: "Islândia",
                afirmacao: "errado"
            },
            {
                texto: "Dinamarca",
                afirmacao: "certo"
            }
        ]
    },
    {
        enunciado: "Qual bandeira é esta?",
        imagem: "paises_baixos.png",
        alternativas: [
            {
                texto: "Países Baixos",
                afirmacao: "certo"
            },
            {
                texto: "Paraguai",
                afirmacao: "errado"
            },
            {
                texto: "Áustria",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "Qual bandeira é esta?",
        imagem: "montenegro.png",
        alternativas: [
            {
                texto: "Albânia",
                afirmacao: "errado"
            },
            {
                texto: "Montenegro",
                afirmacao: "certo"
            },
            {
                texto: "Sérvia",
                afirmacao: "errado"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
let corretas = 0;

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;

    const imagemBandeira = document.createElement("img");
    imagemBandeira.src = perguntaAtual.imagem;
    imagemBandeira.alt = "Imagem da bandeira";
    imagemBandeira.style.display = "block"; // Estilo para exibir a imagem
    imagemBandeira.style.margin = "10px auto"; // Estilo para centralizar a imagem com margem superior e inferior
    imagemBandeira.style.width = "500px"; // Ajuste da largura
    imagemBandeira.style.height = "auto"; // Ajuste da altura para manter a proporção
    caixaPerguntas.appendChild(imagemBandeira);

    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.style.marginTop = "10px"; // Adiciona margem superior para separar as opções
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    if (opcaoSelecionada.afirmacao === "certo") {
        corretas++;
    } else {
        alert("Errado!");
    }
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Acabou!";
    textoResultado.textContent = `Resultado: ${corretas}/${perguntas.length}`;
    caixaAlternativas.textContent = "";
}

mostraPergunta();