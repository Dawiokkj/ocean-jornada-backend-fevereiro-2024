const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello, World!')
})

app.get('/oi', function(req, res){
  res.send('Olá Mundo!')
})

// Lista de Personagens
const lista = ['Ricky Sanchez', 'Morty Smith', 'Summer Smith']

// Read All -> [GET] item
app.get('/item',function (req, res){
  res.send(lista)
})

// Read by ID -> [GET] item/:id
app.get('/item/:id', function(req, res){
  // Acessa o ID no parametro da rota
  const id = req.params.id

  // Acessa o item na lsita baseado no ID recebido
  const item = lista[id]

  // Envia o item recebido como resposta HTTP
  res.send(item)
})

// Sinalizamos que o corpo da requisição está em JSON
app.use(express.json())

// Create -> [POST] /item
app.post('/item', function(req, res){
  // Extrairmos o corpo da requisição
  const body = req.body

  // Pegamos o nome (string) que foi enviado ao corpo 
  const item = body.nome

  // Colocamos o nome dentro da lista de itens
  lista.push(item)

  // Enviamos uma resposta de Sucesso
  res.send("Item adicionado com sucesso!")
})

app.listen(3000)