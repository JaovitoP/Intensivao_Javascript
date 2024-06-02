export const catalogo =[{
    id: '1',
    nome: 'Moletom Branco',
    tamanho: 'P',
    marca: 'Zara',
    preco: 70,
    nomeArquivoImagem: 'moletom_branco.jpg',
    feminino: false
    },
    {
    id: '2',
    nome: 'Moletom Verde',
    tamanho: 'G',
    marca: 'Zara',
    preco: 75,
    nomeArquivoImagem: 'moletom_verde.jpg',
    feminino: false
    },
    {
    id: '3',
    nome: 'Moletom com Pespontos',
    tamanho: 'P',
    marca: 'Zara',
    preco: 70,
    nomeArquivoImagem: 'moletom_pespontos.jpg',
    feminino: false
    },
    {
    id: '4',
    nome: 'Macacão Denim',
    tamanho: 'PP',
    marca: 'Zara',
    preco: 80,
    nomeArquivoImagem: 'macacao_denim.jpg',
    feminino: true
    },
    {
    id: '5',
    nome: 'Macacão jeans',
    tamanho: 'GG',
    marca: 'Zara',
    preco: 65,
    nomeArquivoImagem: 'macacao_jeans.jpg',
    feminino: true
    },
    {
    id: '6',
    nome: 'Moletom Enrugado',
    tamanho: 'M',
    marca: 'Zara',
    preco: 70,
    nomeArquivoImagem: 'moletom_enrugado.jpg',
    feminino: false
    },
    {
    id: '7',
    nome: 'Moletom Azul',
    tamanho: 'G',
    marca: 'Zara',
    preco: 75,
    nomeArquivoImagem: 'moletom_azul.jpg',
    feminino: false
    },
    {
    id: '8',
    nome: 'Casaco com Alamares',
    tamanho: 'G',
    marca: 'Zara',
    preco: 80,
    nomeArquivoImagem: 'casaco_alamares.jpg',
    feminino: false
    },
    {
    id: '9',
    nome: 'Casaco Cruzado',
    tamanho: 'G',
    marca: 'Zara',
    preco: 75,
    nomeArquivoImagem: 'casaco_cruzado.jpg',
    feminino: false
    },
    {
    id: '10',
    nome: 'Vestido de Algodão',
    tamanho: 'G',
    marca: 'Zara',
    preco: 90,
    nomeArquivoImagem: 'vestido_algodao.jpg',
    feminino: true
    },
    {
    id: '11',
    nome: 'Trench',
    tamanho: 'GG',
    marca: 'Zara',
    preco: 150,
    nomeArquivoImagem: 'trench.jpg',
    feminino: false
    },
    {
    id: '12',
    nome: 'Brinco de Argola',
    tamanho: 'GG',
    marca: 'Zara',
    preco: 65,
    nomeArquivoImagem: 'brinco_argola.jpg',
    feminino: true
    },
    {
    id: '13',
    nome: 'Boné de Sarja',
    tamanho: 'P',
    marca: 'Zara',
    preco: 30,
    nomeArquivoImagem: 'bone_sarja.jpg',
    feminino: true
    },
    {
    id: '14',
    nome: 'Corrente com bolinhas',
    tamanho: 'PP',
    marca: 'Zara',
    preco: 20,
    nomeArquivoImagem: 'corrente_bolinhas.jpg',
    feminino: true
    } 
];

export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao))
}

export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave))
}

export function apagarDoLocalStorage(chave) {
  localStorage.removeItem(chave)
}

export function desenharProdutoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto) {
    const produto = catalogo.find((p) => p.id === idProduto)
      const containerProdutosCarrinho = document.getElementById(idContainerHtml)
      const elementoArticle = document.createElement('article') // <article> </article>
      const articleClasses = [
        'flex',
       'bg-stone-200', 
       'rounded-lg', 
       'p-1', 
       'relative',
       'mb-2',
       'w-96'
      ]
  
      for (const articleClass of articleClasses) {
        elementoArticle.classList.add(articleClass)
      }
      //<article class="flex bg-slate-100 rounded-lg p-1 relative">código do cartão do produto</article>
  
      const cartaoProdutoCarrinho = `
      <img src="./assets/img/${produto.nomeArquivoImagem}" alt="Carrinho: ${produto.nome}" class="h-24 rounded-lg">
      <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">${produto.nome}</p>
        <p class="text-slate-400 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">$${produto.preco}</p>
      </div>
      <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
      </div>`;
  
    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle)
  }