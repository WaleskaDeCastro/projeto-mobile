#language: pt
@adicionar-produto
Funcionalidade: Adicionar Produtos ao Carrinho
  Esquema do Cenario: Adicionar Produto ao Carrinho com Sucesso
    Dado que abro o aplicativo Solomerce
    Quando pesquisar o produto "<termo_busca>"
    Entao exibe o produto com o nome "<nome_produto>" e preco "<preco_produto>"
    Quando seleciono o produto
    Entao exibe a pagina de detalhes com o nome "<nome_produto>" e preco "<preco_produto>"
    Quando adiciono o produto ao carrinho
    E preencho a quantidade de itens "<quantidade>" e confirmo
    E abro o carrinho de compras
    Entao exibe o produto no carrinho com o nome "<nome_produto>" e preco "<preco_produto>"

    Exemplos:
      | termo_busca     | nome_produto                                                   | preco_produto | quantidade |
      | Mini Digital    | Mini Digital Speaker TD-V26 USB FM Radio SD TF Card MP3 - Red  | 19 USD        | 1          |
      | Bathroom Toilet | Bathroom Toilet Wall Shelves A289                              | 8 USD         | 1          |
