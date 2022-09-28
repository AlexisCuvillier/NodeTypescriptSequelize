import { Application } from "express";
import { Wow, wowTemplate } from "../types/template";

const { User } = require('../database/connect')
  
module.exports = (app :Application) => {
  app.delete('/api/users/:id', (req, res) => {
    User.findByPk(req.params.id).then((user: Wow) => {
      const userDeleted = user;
      User.destroy({
        where: { id: user.id }
      })
      .then(() => {
        const message = `L'utilisateur avec l'identifiant n°${userDeleted.id} a bien été supprimé.`
        res.json({message, data: userDeleted })
      })
    })
  })
}