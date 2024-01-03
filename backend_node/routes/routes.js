import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogController.js'
const blogRoutes = express.Router()

blogRoutes.get('/', getAllBlogs)
blogRoutes.get('/:id', getBlog)
blogRoutes.post('/', createBlog)
blogRoutes.put('/:id', updateBlog)
blogRoutes.delete('/:id', deleteBlog)

export default blogRoutes