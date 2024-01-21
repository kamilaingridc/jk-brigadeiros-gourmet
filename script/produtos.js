const items = [
    {
        id: 0,
        nome: 'Brigadeiro Branco',
        img: '/images/produtos/branco.png',
        quantidade: 0,
        preco: 3,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 1,
        nome: 'Brigadeiro de Cacau 100%',
        img: '/images/produtos/cacau_cem.png',
        quantidade: 0,
        preco: 3,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 2,
        nome: 'Brigadeiro Casadinho',
        img: '/images/produtos/casadinho.png',
        quantidade: 0,
        preco: 3,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 3,
        nome: 'Brigadeiro de Churros',
        img: '/images/produtos/churros.png',
        quantidade: 0,
        preco: 3,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 4,
        nome: 'Brigadeiro de Cocadinha',
        img: '/images/produtos/cocadinha.png',
        quantidade: 0,
        preco: 3,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 5,
        nome: 'Brigadeiro Kids',
        img: '/images/produtos/kids.png',
        quantidade: 0,
        preco: 3,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 6,
        nome: 'Brigadeiro de Limão',
        img: '/images/produtos/limão.png',
        quantidade: 0,
        preco: 3,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 7,
        nome: 'Brigadeiro Meio Amargo',
        img: '/images/produtos/meio amargo.png',
        quantidade: 0,
        preco: 3,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 8,
        nome: 'Brigadeiro de Ninho e Nutella',
        img: '/images/produtos/ninho e nutella.png',
        quantidade: 0,
        preco: 3,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 9,
        nome: 'Brigadeiro de Ninho',
        img: '/images/produtos/ninho.png',
        quantidade: 0,
        preco: 3,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 10,
        nome: 'Brigadeiro Pecado',
        img: '/images/produtos/pecado.png',
        quantidade: 0,
        preco: 3,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 11,
        nome: 'Brigadeiro de Pistache',
        img: '/images/produtos/pistache.png',
        quantidade: 0,
        preco: 4,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 12,
        nome: 'Brigadeiro "Surpresa de Uva"',
        img: '/images/produtos/surpresa de uva.png',
        quantidade: 0,
        preco: 3,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 13,
        nome: 'Brigadeiro Tradicional',
        img: '/images/produtos/tradicional.png',
        quantidade: 0,
        preco: 3,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 14,
        nome: 'Caixa C/ 4 - Tradicional',
        img: '/images/produtos/caixa4-removebg-preview.png',
        quantidade: 0,
        preco: 12,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 15,
        nome: 'Caixa C/ 4 - Sabores Mistos',
        img: '/images/produtos/caixac4-removebg-preview.png',
        quantidade: 0,
        preco: 12,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 16,
        nome: 'Caixa C/ 12 - Sabores Mistos',
        img: '/images/produtos/caixa6-removebg-preview.png',
        quantidade: 0,
        preco: 12,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 17,
        nome: 'Caixa C/ 8 - Sabores Mistos',
        img: '/images/produtos/caixa8-removebg-preview.png',
        quantidade: 0,
        preco: 12,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 18,
        nome: 'Caixa C/ 12 - Sabores Mistos',
        img: '/images/produtos/caixa12-removebg-preview.png',
        quantidade: 0,
        preco: 12,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 19,
        nome: 'Caixa C/ 24 - Sabores Mistos',
        img: '/images/produtos/caixa24-removebg-preview.png',
        quantidade: 0,
        preco: 12,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 20,
        nome: 'Caixa C/ 35 - Sabores Mistos',
        img: '/images/produtos/caixa35-removebg-preview.png',
        quantidade: 0,
        preco: 12,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 21,
        nome: 'Caixa C/ 50 - Sabores Mistos',
        img: '/images/produtos/caixa50-removebg-preview.png',
        quantidade: 0,
        preco: 12,
        categoria: 'Individual',
        descricao: '?'
    },
    {
        id: 22,
        nome: 'Cento - Personalizado',
        img: '/images/produtos/cento-removebg-preview.png',
        quantidade: 0,
        preco: 12,
        categoria: 'Individual',
        descricao: '?'
    },
]
 
 
 
let container = document.getElementById('produtoo')
 
// Definir a função para inicializar a loja
function inicializarLoja(produtos) {
    let containerProdutos = document.getElementById('produtoo');
 
    // Verificar se o elemento 'produtos' existe antes de manipular o innerHTML
    if (containerProdutos) {
        containerProdutos.innerHTML = '';
   
        produtos.forEach((produto) => {
            const produtoHtml = `
                <div class="product">
                    <div id="${produto.id}">
                        <img class="imagem" src="${produto.img}">
                        <h1 class="product-name">${produto.nome}</h1>
                        <div class="botao">
                            <a href="produto.html?id=${produto.id}">Adicionar</a>
                        </div>
                    </div>
                </div>`;
            containerProdutos.innerHTML += produtoHtml;
        });
   
    } else {
        console.error("Elemento 'produtos' não encontrado no DOM.");
    }
   
}
 
// Inicializar a loja com todos os produtos ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    inicializarLoja(items);
});