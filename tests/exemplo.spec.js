// This sample code supports WebdriverIO client >=9.7.0
// (npm i --save webdriverio)
// Then paste this into a .js file and run with Node:
// node <file>.js

import { remote } from "webdriverio";
import { expect } from "expect-webdriverio";

async function main() {
  const driver = await remote({
    protocol: "http",
    hostname: "127.0.0.1",
    port: 4723,
    path: "/",
    capabilities: {
      platformName: "Android",
      "appium:platformVersion": "16.0",
      "appium:deviceName": "emulator5554",
      "appium:automationName": "UiAutomator2",
      "appium:appPackage": "com.solodroid.solomerce",
      "appium:appActivity":
      "com.solodroid.solomerce.activities.ActivitySplash",
      "appium:newCommandTimeout": 3600,
    },
  });

  // Inicializa as variáveis Globais
  const search_btn = "id=com.solodroid.solomerce:id/search";
  const search_input = "id=com.solodroid.solomerce:id/search_src_text";
  const product_name = "id=com.solodroid.solomerce:id/product_name";
  const product_price = "id=com.solodroid.solomerce:id/product_price";
  const add_cart_btn = "id=com.solodroid.solomerce:id/btn_add_cart";
  const number_order_itens = "id=com.solodroid.solomerce:id/userInputDialog";
  const number_order_add_btn = "id=android:id/button1";
  const cart_btn = "id=com.solodroid.solomerce:id/cart";

  // Massa de Dados do Teste
  const TERMO_PESQUISA = "Mini Digital Speaker";
  const NOME_ESPERADO = "Mini Digital Speaker TD-V26 USB FM Radio SD TF Card MP3 - Red";
  const PRECO_ESPERADO = "19 USD";

  // Função auxiliar para validação de produto
  async function validarNomeEPreco() {
    const elNome = await driver.$(product_name);
    await elNome.waitForDisplayed({ timeout: 10000 });
    await expect(elNome).toHaveText(NOME_ESPERADO);

    const elPreco = await driver.$(product_price);
    await expect(elPreco).toHaveText(PRECO_ESPERADO);
  }

  try {
    // 1. Pesquisar o produto no search pelo nome "Mini Digital Speaker"
    const btnPesquisar = await driver.$(search_btn);
    await btnPesquisar.waitForDisplayed({ timeout: 10000 });
    await btnPesquisar.click();

    const inputPesquisa = await driver.$(search_input);
    await inputPesquisa.waitForDisplayed({ timeout: 10000 });
    await inputPesquisa.setValue(TERMO_PESQUISA);

    // 2. Validar o nome do produto e o preco na tela
    await validarNomeEPreco();

    // 3. Selecionar o produto (clicar nele)
    await (await driver.$(product_name)).click();

    // 4. Validar novamente o nome e o preço na tela atual
    await validarNomeEPreco();

    // 5. Adicionar o produto ao carrinho (clicar no botão Add to Cart)
    const btnAddCart = await driver.$(add_cart_btn);
    await btnAddCart.waitForDisplayed({ timeout: 10000 });
    await btnAddCart.click();

    // 6. Preencher a quantidade de itens (1) e clicar no botão Add
    const inputQtd = await driver.$(number_order_itens);
    await inputQtd.waitForDisplayed({ timeout: 10000 });
    await inputQtd.setValue("1");

    const btnAddQtd = await driver.$(number_order_add_btn);
    await btnAddQtd.waitForDisplayed({ timeout: 10000 });
    await btnAddQtd.click();

    // 7. Acessar o carrinho clicando no botão carrinho
    const btnCarrinho = await driver.$(cart_btn);
    await btnCarrinho.waitForDisplayed({ timeout: 10000 });
    await btnCarrinho.click();

    // 8. Validar novamente o nome e o preço na tela atual (carrinho)
    await validarNomeEPreco();

    console.log("Teste executado com sucesso!");

  } finally {
    await driver.deleteSession();
  }
}

main().catch((error) => {
  console.error("Falha na automação:", error);
  process.exitCode = 1;
});