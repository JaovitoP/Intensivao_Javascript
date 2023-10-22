import { inicializarCarrinho } from "./src/menuCarrinho"

const catalogo =[{
    id: 1,
    nome: 'Moletom Enrugado',
    marca: 'Zara',
    preco: 70,
    nomeArquivoImagem: 'moletom_enrugado.jpg'
    },
    {
    id: 2,
    nome: 'Moletom Branco',
    marca: 'Zara',
    preco: 75,
    nomeArquivoImagem: 'moletom_branco.jpg'
    },
    {
    id: 3,
    nome: 'Moletom com Pespontos',
    marca: 'Zara',
    preco: 70,
    nomeArquivoImagem: 'moletom_pespontos.jpg'
    },
    {
    id: 4,
    nome: 'Moletom Verde',
    marca: 'Zara',
    preco: 80,
    nomeArquivoImagem: 'moletom_verde.jpg'
    },
    {
    id: 5,
    nome: 'Moletom Azul',
    marca: 'Zara',
    preco: 65,
    nomeArquivoImagem: 'moletom_azul.jpg'
    }
]

for(const produtoCatalogo of catalogo){
    const cartaoProduto= `<div class='border-solid border-2 border-sky-500 w-48 m-2' id="card-produto-${produtoCatalogo.id}">
    <img 
        src="assets/img/${produtoCatalogo.nomeArquivoImagem}"
        alt="Produto 1 do Magazine Hashtag."
        style="height: 300px"
    />
    <p class='marca'>${produtoCatalogo.marca}</p>
    <p>${produtoCatalogo.nome}</p>
    <p>$${produtoCatalogo.preco}</p>
    <button>Adicionar</button>
    </div>`
    
    document.getElementById('container-produto').innerHTML += cartaoProduto
}

inicializarCarrinho();