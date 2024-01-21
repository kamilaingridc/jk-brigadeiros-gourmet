import { deletarItem, listCarrinhoCompras, gerarPedido, valorTotalQuantidade, cartIndicator } from "./funcoes.js";

document.addEventListener('DOMContentLoaded', function () {
    let listaCarrinhoDeCompras = JSON.parse(localStorage.getItem("carrinho"));
    let carrinho = document.querySelector('main');

    let pedidos = JSON.parse(localStorage.getItem("pedidos"));
    if (pedidos === null) {
        pedidos = [];
    }

    cartIndicator(listaCarrinhoDeCompras);
    listCarrinhoCompras(listaCarrinhoDeCompras, carrinho);
    deletarItem(listaCarrinhoDeCompras, valorTotalQuantidade);
    valorTotalQuantidade(listaCarrinhoDeCompras);

    let btn_finalizar = document.querySelectorAll(".btn_area button:nth-child(2)");
    btn_finalizar.forEach(botao => botao.addEventListener("click", () => gerarPedido(listaCarrinhoDeCompras, pedidos)));
});
