// Aqui dentro será configurado o Express para essa aplicação

//primeiro eu preciso estabelecer uma porta (processo)
//essa porta é necessário para que a nossa aplicação se comunique com a rede,

const porta = 3003

//estamos invocando o express para esse módulo
const express = require('express')

//instanciando a função express dentro de "app", aonde os nossos serviços estarão
const app = express()

//o get nesse caso é uma forma de requisição, e vamos usar também o padrão middleware
app.get('/produtos',(req,res,nest) => {
    res.send({nome: "notebook",preco: 3500}) //será convertido para JSON, por causa do "send"
})

                        //enquanto essa execução rolar, a porta estará ocupada
app.listen(porta, () => {console.log(`servidor executando na porta ${porta}`)})