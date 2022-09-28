import { Application } from "express"
import { ApiException } from "../types/exception"
import { wowTemplate } from "../types/template"

const { User } = require('../database/connect')
  
module.exports = (app : Application) => {
  app.get('/api/users/:id', (req, res) => {
    User.findByPk(req.params.id)
      .then((user : wowTemplate )=> {
        if (user === null){
          const message = "Le user demandé n'existe pas. Réessayer avec un autre identifiant."
          return res.status(404).json({message})
        }

        const message : string = 'Un utilisateur a bien été trouvé.'
        res.json({ message, data: user })
      })
      .catch((error : ApiException ) => {
        const message = "Le user demander n'a pas pu être récuperer. Réessayer dans quelques instants."
        res.status(500).json({message, data: error})
      })
  })
}