import { Application } from "express";
import { wowTemplate } from "../types/template";

const { User } = require("../database/connect");

module.exports = (app: Application) => {
  app.post("/api/users", (req, res) => {
    User.create(req.body)
      .then((user: wowTemplate) => {
        const message: string = `Le user ${req.body.name} a bien été crée.`;
        res.json({ message, data: user });
      })
      .catch((error: Error) => console.log(error));
  });
};
