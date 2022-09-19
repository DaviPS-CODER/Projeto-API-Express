//um objeto que representa uma sequência pra pegar os "id" dos objetos que irei persistir

const sequence = {
    _id: 1,
    get id(){ return this._id++}
}

const produtos = {}         //a chave vai ser o ID do produto, e o valor o próprio objeto

function salvarProduto(produto){
    if(!produto.id) produto.id = sequence.id  //se o id não estiver setado, vai receber um id
    produtos[produto.id] = produto            // aqui eu estarei adicionando novos produtos
    return produto
}

function getProduto(id){            //função para pegar o produto pelo id
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)  //função para retornar os valores que estão em produtos
}

//uma função para excluir produtos:
function excluirProdutos(id){
    const produto = produtos[id]
    delete produtos[id]  
    return produto
}


//as 3 funções estão visíveis para fora do módulo, mas "sequence" continua interno
module.exports = {salvarProduto, getProduto,getProdutos,excluirProdutos}
