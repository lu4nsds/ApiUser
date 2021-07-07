
//Como a utilização de um banco de dados não foi requerida, criei funções
//que simulam as funções de criação, atualização, busca e exclusão do banco

const { json } = require("express")

//que seria utilizado.
module.exports = {
    create({name, email, pictureUrl}){
        console.log("Função de criação do banco utilizada")
        const user = {
            name,
            email,
            pictureUrl,
        }
        return user
    },
    find(){
        console.log("Função de busca do banco utilizada")
        const user1 = {
            id: 1,
            name: 'Luan Santos',
            email: 'luan@gmail.com',
            picitureUrl: 'images/eu.jpg',
        }
        const user2 = {
            id: 2,
            name: 'Maria Joana',
            email: 'maria@gmail.com',
            picitureUrl: 'images/eu.jpg',
        }
        const user3 = {
            id: 3,
            name: 'João Maria',
            email: 'joao@gmail.com',
            picitureUrl: 'images/eu.jpg',
        }

        const users = [
            user1,
            user2,
            user3,
        ]
        return users
    },
    findOne({param}) {
        console.log("Função de busca de usuário único do banco utilizada")
        const user1 = {
            id: 1,
            name: 'Luan Santos',
            email: 'luan@gmail.com',
            picitureUrl: 'images/eu.jpg',
        }

        const users = [
            user1,
        ]
        return users
    },

    findOneAndUpdate(id, name, email, picitureUrl) {
        console.log("Função de atualização do banco utilizada")
        const user1 = {
            id: Number(id) + 7,
            name,
            email,
            picitureUrl,
        }

        
        return user1
    },

    findOneAndRemove(id){
        console.log("Função de exclusão do banco utilizada")
        return {}
    }
}