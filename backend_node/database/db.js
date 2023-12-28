import {Sequelize} from 'sequelize'

const db = new Sequelize('node_react_app', 'root', 'root',{
    host:'localhost',
    dialect: 'mysql'
})

export default db