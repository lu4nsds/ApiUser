const User = require('../Models/User')

module.exports = {
    create(req , res) {
        try {
            const {name, email, pictureUrl} = req.body
            const user = User.create({
            name,
            email,
            pictureUrl,
        })
        return res.json(user)
        }
        catch {
            return res.status(400)
        }
    },

    index(req, res) {
        try {
            const users = User.find()
            if(req.query.page && req.query.results){
                const page = Number(req.query.page)
                const limit = Number(req.query.results)
                const skipIndex = (page - 1) * limit
                let myUsers = []
                for (let index = skipIndex; index < users.length; index++) {
                    if(myUsers.length < limit){
                        myUsers = [...myUsers, users[index]]  
                    }
                }                  
                                
                return res.json(myUsers)
            }
            return res.json(users)
        }
        catch {
            return res.status(400)
        }
    },

    indexOne(req, res) {
        try {
            const users = User.findOne(req.params.id)
            return res.json(users)
        }
        catch {
            return res.status(400)
        }
    },

    searchName(req, res) {
        try {
            const users = User.findOne(req.query)
            return res.json(users)
        }
        catch {
            return res.status(400)
        }
    },

    update(req, res){
        try {
            const {name, email, pictureUrl} = req.body
            const users = User.findOneAndUpdate(req.params.id, name, email,pictureUrl)

            return res.json(users)
        }
        catch {
            return res.status(400)
        }
    },

    destroy(req, res){
        try {
            const users = User.findOneAndRemove(req.params.id)
            return res.json(users)
        }
        catch {
            return res.status(400)
        }
    }

}