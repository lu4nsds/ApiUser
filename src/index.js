const express = require('express')
const app = express()
const routes = require('./routes')
app.use(express.json())
//Para inicialização do server foi criado um script "start" no package.Json
//Então para iniciar o server necessita digitar "npm start" no console
app.use(routes)

app.listen(7777);