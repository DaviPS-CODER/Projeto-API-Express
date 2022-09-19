// Aqui dentro será configurado o Express para essa aplicação

//primeiro eu preciso estabelecer uma porta (processo)
//essa porta é necessário para que a nossa aplicação se comunique com a rede,

const porta = 3003

const express = require('express')
const app = express()

const bancoDeDados = require ('./bancoDeDados.js') 

const bodyParser = require('body-parser')  

/*a parte abaixo usa um middleware q vai passar por cada requisição, 
e se o padrão "urlencoded" for encontrado, será feito um parser, transformando em objeto*/
app.use(bodyParser.urlencoded({extended: true}))    //"urlencode" vai retornar uma função middleware que vai fazer um "parser" no body da requisição



//o get nesse caso é uma forma de requisição, e ele vai pegar a lista de produtos que está no "banco"
app.get('/produtos',(req,res,next) => {       //tem como usar "app.use" que é outra forma de passar um middleware
    res.send(bancoDeDados.getProdutos())      //pegando os produtos com as funções que criei
})


//o id nesse caso se comporta como um parametro, e será usado para pegar algum produto em específico
app.get('/produtos/:id', (req,res,next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))       //"req.params" é o local aonde coloco os parametros da url
})

//nesse parte irei submeter os dados e salvar um novo produto
app.post('/produtos',(req,res,next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,            //o "req" serve para pegar essas informações que eu quero persistir
        preco: req.body.preco

    })
    res.send(produto)           //uma resposta ao que se está sendo feito, e isso vira um JSON
})

//com o "listen" eu vou indicar em qual porta será "ouvida"
app.listen(porta, () => {           //enquanto essa execução rolar, a porta estará ocupada
    console.log(`servidor executando na porta ${porta}.`)  //essa é apenas uma mensagem que será enviada quando a aplicação iniciar
})


//essa função PUT é usada para alterar um registro que já existe
app.put('/produtos/:id', (req,res,next) => {
    const produtos = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produtos)
})

//uma função para deletar um produto 
app.delete('/produtos/:id', (req,res,next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto)
})