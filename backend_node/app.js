import express from "express";
import cors from 'cors'
//importación de la conexión a la BD
import db from "./database/db.js";
//importación del enrutador
import blogRoutes from "./routes/routes.js";

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la BD')
} catch (error) {
    console.log(`Error de conexión: ${error}`) //plantillas literarias

}

app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
})

app.listen(8000, ()=>{
    console.log('Server Up running in http://localhost:8000/')
})