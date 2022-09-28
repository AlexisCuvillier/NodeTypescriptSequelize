import { Application } from "express"
import { wowTemplate } from "../types/template"

const {User} = require('../database/connect')

module.exports = (app : Application) => {
    app.get('/api/users', (req,res) => {
        User.findAll()
        .then((users: wowTemplate) => {
            const message : string = 'La liste des users à bien était récuperée.'
            res.json({message, data: users})
        })
    })
}