const express = require('express')

const server = express()

server.use(express.json())

const users = ["Alisson", "Eric", "Joao"]

server.get('/users', (req, res) => {

    return res.json(users) 
})
server.post('/users', (req, res) => { 
    const { name } = req.body

    users.push(name)

    return res.json(users)
})

server.put('/users/:index', (req, res) => { //Metodo editar usuario
    const { index } = req.params
    const { name } = req.body

    users[index] = name

    return res.json(users)
})

server.put('/users/:index', (req, res) => {
   
    users.splice(index, 1) //Metodo deletar usuario
  
})

server.listen(3000)