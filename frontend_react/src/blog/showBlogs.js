import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'


const CompShowBlogs = () => {

    const [blogs, setBlog] = useState([])
    useEffect(() => {
        getBlogs()
    }, [])

    //procedimineto para mostrar todos los blogs
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    //procedimineto para eliminar un blog
    const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`)
        getBlogs()
    }

    const navigate = useNavigate()

    const editBlog = (id, title, content) => {
        console.log(id)
        console.log(title)

        console.log(content)
        sessionStorage.setItem('id', id)
        sessionStorage.setItem('title', title)
        sessionStorage.setItem('content', content)
        navigate(`/edit/${id}`)

    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td> {blog.title} </td>
                                    <td> {blog.content} </td>
                                    <td>
                                        {/* <Link to={`/edit/${blog.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link> */}
                                        <button onClick={() => editBlog(blog.id, blog.title, blog.content)} className='btn btn-info'><i className="fas fa-edit"></i></button>
                                        <button onClick={() => deleteBlog(blog.id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default CompShowBlogs