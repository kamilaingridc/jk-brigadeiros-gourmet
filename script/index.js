import { catalogoProdutos } from "./data.js";
import { carregaProdutos, handleClick } from "./funcoes.js";

document.addEventListener('DOMContentLoaded', function () {
    let listaCompras = JSON.parse(localStorage.getItem("carrinho"));

    let produtoHome = catalogoProdutos.filter(produto => produto.categoria === "Home");

    let gridProdutos = document.querySelector("#produtos-home");
    let gridFerramenta = document.querySelector("#produtos-promocao");

    carregaProdutos(produtoHome, gridProdutos);
    handleClick();
});
