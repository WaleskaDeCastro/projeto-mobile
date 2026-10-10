class CartPage {
    get lbl_nome_produto() {
        return driver.$("id=com.solodroid.solomerce:id/product_name");
    }

    get lbl_preco_produto() {
        return driver.$("id=com.solodroid.solomerce:id/product_price");
    }
}

export const cartPage = new CartPage();
