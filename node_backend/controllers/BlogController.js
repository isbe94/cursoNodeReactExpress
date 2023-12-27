import BlogModel from "../models/BlogModel.js";

//**Métodos CRUD **/

//Mostrar todos los registros
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll();
        res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar un registro
export const getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where:{ id: req.params.id }
        })
        res.json(blog)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear un registro
export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({"message":"¡Registro creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Modificar un registro
export const updateBlog = async (req, res) => {
    try {
        const blog = await BlogModel.update({
            where:{ id: req.params.id }
        })
        res.json(blog)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Eliminar un registro
export const deleteBlog = async (req, res) => {
    try {
        const blog = await BlogModel.destroy({
            where:{ id: req.params.id }
        })
        res.json({"message":"¡Registro eliminado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
    }
}