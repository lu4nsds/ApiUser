const {Router, response, request} = require('express')
const UsersController = require('./controllers/UsersController')
const routes = Router()

 /* A rota de paginação é a users utilizando do método Get na função index do UsersController. 
 Caso venha da requisição os parâmetros query 'page' e 'results' a api retornará o resultado
 em páginas. Caso não haja os parâmetros query, a api retornará todos os users. */
 
routes.post('/users', UsersController.create)
routes.get('/users', UsersController.index)
routes.get('/user/:id', UsersController.indexOne)
routes.get('/search', UsersController.searchName)
routes.put('/user/:id', UsersController.update)
routes.delete('/user/:id', UsersController.destroy)
module.exports = routes