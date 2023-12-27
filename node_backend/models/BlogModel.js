//importar conexion a la bd
import db from "../database/db.js";
//importar sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define('blogs', {
    title: {type:DataTypes.STRING},
    content: {type:DataTypes.STRING},
})


export default BlogModel
