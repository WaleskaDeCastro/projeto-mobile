import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "expect-webdriverio";
import { productsPage } from "../pageobjects/products.page.js";
import { productDetails } from "../pageobjects/product_details.page.js";
import { cartPage } from "../pageobjects/cart.page.js";

Given("que abro o aplicativo Solomerce", async () => {
    await productsPage.btn_search.waitForDisplayed({ timeout: 10000 });
});

When("pesquisar o produto {string}", async (termoBusca) => {
    await productsPage.pesquisarProduto(termoBusca);
});

Then("exibe o produto com o nome {string} e preco {string}", async (nomeEsperado, precoEsperado) => {
    await productsPage.lbl_nome_produto.waitForDisplayed({ timeout: 10000 });
    await expect(productsPage.lbl_nome_produto).toHaveText(nomeEsperado);
    await expect(productsPage.lbl_preco_produto).toHaveText(precoEsperado);
});

When("seleciono o produto", async () => {
    await productsPage.selecionarProduto();
});

Then("exibe a pagina de detalhes com o nome {string} e preco {string}", async (nomeEsperado, precoEsperado) => {
    await productDetails.lbl_nome_produto.waitForDisplayed({ timeout: 10000 });
    await expect(productDetails.lbl_nome_produto).toHaveText(nomeEsperado);
    await expect(productDetails.lbl_preco_produto).toHaveText(precoEsperado);
});

When("adiciono o produto ao carrinho", async () => {
    await productDetails.btn_adicionar_carrinho.waitForDisplayed({ timeout: 10000 });
    await productDetails.btn_adicionar_carrinho.click();
});

When("preencho a quantidade de itens {string} e confirmo", async (quantidade) => {
    await productDetails.input_quantidade.waitForDisplayed({ timeout: 10000 });
    await productDetails.input_quantidade.setValue(quantidade);
    await productDetails.btn_confirmar_quantidade.waitForDisplayed({ timeout: 10000 });
    await productDetails.btn_confirmar_quantidade.click();
});

When("abro o carrinho de compras", async () => {
    await productDetails.abrirCarrinho();
});

Then("exibe o produto no carrinho com o nome {string} e preco {string}", async (nomeEsperado, precoEsperado) => {
    await cartPage.lbl_nome_produto.waitForDisplayed({ timeout: 10000 });
    await expect(cartPage.lbl_nome_produto).toHaveText(nomeEsperado);
    await expect(cartPage.lbl_preco_produto).toHaveText(precoEsperado);
});