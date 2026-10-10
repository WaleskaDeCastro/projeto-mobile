class ProductDetails {
    get lbl_nome_produto() {
        return driver.$("id=com.solodroid.solomerce:id/product_name");
    }

    get lbl_preco_produto() {
        return driver.$("id=com.solodroid.solomerce:id/product_price");
    }

    get btn_adicionar_carrinho() {
        return driver.$("id=com.solodroid.solomerce:id/btn_add_cart");
    }

    get input_quantidade() {
        return driver.$("id=com.solodroid.solomerce:id/userInputDialog");
    }

    get btn_confirmar_quantidade() {
        return driver.$("id=android:id/button1");
    }

    get btn_icone_carrinho() {
        return driver.$("id=com.solodroid.solomerce:id/cart");
    }

    async adicionarAoCarrinho(quantidade = "1") {
        await this.btn_adicionar_carrinho.waitForDisplayed({ timeout: 10000 });
        await this.btn_adicionar_carrinho.click();
        await this.input_quantidade.waitForDisplayed({ timeout: 10000 });
        await this.input_quantidade.setValue(quantidade);
        await this.btn_confirmar_quantidade.waitForDisplayed({ timeout: 10000 });
        await this.btn_confirmar_quantidade.click();
    }

    async abrirCarrinho() {
        await this.btn_icone_carrinho.waitForDisplayed({ timeout: 10000 });
        await this.btn_icone_carrinho.click();
    }
}

export const productDetails = new ProductDetails();