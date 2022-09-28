import { Application } from "express"
import { wowTemplate } from "../types/template"

const { User } = require('../database/connect')
  
module.exports = (app : Application) => {
  app.get('/api/users/:id', (req, res) => {
    User.findByPk(req.params.id)
      .then((user : wowTemplate )=> {
        const message : string = 'Un utilisateur a bien été trouvé.'
        res.json({ message, data: user })
      })
  })
}