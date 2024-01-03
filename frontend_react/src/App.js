import logo from './logo.svg'
import './App.css'

//importación de componentes
import CompShowBlogs from './blog/showBlogs'
import CompCreateBlog from './blog/createBlog'
import CompEditBlog from './blog/editBlog'

import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowBlogs />} />
            <Route path='/create' element={ <CompCreateBlog />} />
            <Route path='/edit/:id' element={ <CompEditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
