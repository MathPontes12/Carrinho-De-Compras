let subTotal= 0

limpar()

function adicionar() {
    
    produtoEscolhido= document.getElementById('produto').value; // recupera o conteudo da opçao selecionada
    nomeDoProduto= produtoEscolhido.split('-')[0];              // SPLIT separa a tag dentro da classe pelo hifen, isolando o conteudo antes do hifen [0] (esquerda)
    valorUnitario= produtoEscolhido.split('R$')[1];             // SPLIT separa a tag dentro da classe pelo R$, isolando o conteudo antes do hifen [1] (direita)
    quantidade= document.getElementById('quantidade').value;          // recupera a quantidade selecionada

    let preco= valorUnitario * quantidade
    
    let carrinho= document.getElementById('lista-produtos');
    carrinho.innerHTML= carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${preco}</span>
  </section>`

    subTotal= subTotal + preco;

    let valorDoCarrinho= document.getElementById('valor-total');
    valorDoCarrinho.textContent= `R$ ${subTotal}`;

    document.getElementById('quantidade').value= 1;
    }

    function limpar() {

        document.getElementById('lista-produtos').innerHTML= '';
        document.getElementById('valor-total').innerHTML='';
        subTotal= 0
        document.getElementById('quantidade').value= 1;
    }