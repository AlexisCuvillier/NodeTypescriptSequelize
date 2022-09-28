import { Application } from "express"
import { wowTemplate } from "../types/template"

const { User } = require('../database/connect')
  
module.exports = (app : Application) => {
  app.put('/api/users/:id', (req, res) => {
    const id = req.params.id
    User.update(req.body, {
      where: { id: id }
    })
    .then(() => {
      User.findByPk(id).then((user: wowTemplate ) => {
        const message = `L'utilisateur ${user.name} a bien été modifié.`
        res.json({message, data: user })
      })
    })
  })
}