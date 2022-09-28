

import {  DataTypes, Sequelize } from "sequelize"


module.exports = (sequelize : Sequelize, dataTypes : typeof DataTypes) => {
    return sequelize.define('User', {

    
    id: {
       type: dataTypes.INTEGER,
       autoIncrement: true,
       primaryKey: true, 
    },
    name: {
        type: dataTypes.STRING,
    },
    mail: {
        type: dataTypes.STRING,
    },
    description: {
        type: dataTypes.STRING,
    },
    image: {
        type: dataTypes.STRING,
    }
})
}
