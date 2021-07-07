const {Router, response, request} = require('express')
const UsersController = require('./controllers/UsersController')
const routes = Router()

routes.post('/users', UsersController.create)
routes.get('/users', UsersController.index)
routes.get('/user/:id', UsersController.indexOne)
routes.get('/search', UsersController.searchName)
routes.put('/user/:id', UsersController.update)
routes.delete('/user/:id', UsersController.destroy)
module.exports = routes