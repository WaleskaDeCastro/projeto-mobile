export class ProductsPage {
    get btn_search() {
        return driver.$("id=com.solodroid.solomerce:id/search");
    }

    get input_search() {
        return driver.$("id=com.solodroid.solomerce:id/search_src_text");
    }

    get lbl_nome_produto() {
        return driver.$("id=com.solodroid.solomerce:id/product_name");
    }

    get lbl_preco_produto() {
        return driver.$("id=com.solodroid.solomerce:id/product_price");
    }

    async pesquisarProduto(termo) {
        await this.btn_search.waitForDisplayed({ timeout: 10000 });
        await this.btn_search.click();
        await this.input_search.waitForDisplayed({ timeout: 10000 });
        await this.input_search.setValue(termo);
    }

    async selecionarProduto() {
        await this.lbl_nome_produto.waitForDisplayed({ timeout: 10000 });
        await this.lbl_nome_produto.click();
    }
}

export const productsPage = new ProductsPage();