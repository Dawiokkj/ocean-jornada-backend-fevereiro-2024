const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello, World!')
})

app.get('/oi', function(req, res){
  res.send('Olá Mundo!')
})

//Lista de Personagens
const lista = ['Ricky Sanchez', 'Morty Smith', 'Summer Smith']

//Read All -> [GET] item
app.get('/item',function (req, res){
  res.send(lista)
})

//Read by ID -> [GET] item/:id
app.get('/item/:id', function(req, res){
  //Acessa o ID no parametro da rota
  const id = req.params.id

  //Acessa o item na lsita baseado no ID recebido
  const item = lista[id]

  //Envia o item recebido como resposta HTTP
  res.send(item)
})

app.listen(3000)