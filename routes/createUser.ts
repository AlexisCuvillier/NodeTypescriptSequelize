import { Application } from "express";
import { ApiException } from "../types/exception";
import { wowTemplate } from "../types/template";

const { User } = require("../database/connect");

module.exports = (app: Application) => {
  app.post("/api/users", (req, res) => {
    User.create(req.body)
      .then((user: wowTemplate) => {
        const message: string = `Le user ${req.body.name} a bien été crée.`;
        res.json({ message, data: user });
      })
      .catch((error : ApiException) => {
        const message = `L'utilisateur n'a pas pu être ajouté. Réessayer dans quelques instants.`
        res.status(500).json({message, data : error})
    })
  });
};
