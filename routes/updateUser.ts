import { Application } from "express";
import { ApiException } from "../types/exception";
import { wowTemplate } from "../types/template";

const { User } = require("../database/connect");

module.exports = (app: Application) => {
  app.put("/api/users/:id", (req, res) => {
    const id = req.params.id;
    User.update(req.body, {
      where: { id: id },
    })
      .then(() => {
       return User.findByPk(id).then((user: wowTemplate) => {
          if (user === null){
            const message = "Le user demandé n'existe pas. Réessayer avec un autre identifiant."
            return res.status(404).json({message})
          }
            const message = `L'utilisateur ${user.name} a bien été modifié.`;
            res.json({ message, data: user });
          })
      })
      .catch((error: ApiException) => {
        const message = `L'utilisateur' n'a pas pu être modifié. Réessayer dans quelques instants.`;
        res.status(500).json({ message, data: error });
      });
  });
};
