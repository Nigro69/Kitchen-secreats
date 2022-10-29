import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

import Home from './pages/home/Home'
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './hooks/useTheme';

function App() {

  const {mode}=useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>

        <Navbar/>

        <ThemeSelector />

        <Routes>

          <Route end path='/' element={<Home/>} />
          <Route path='/Create' element={<Create/>} />
          <Route path='/Recipe/:id' element={<Recipe/>} />
          <Route path='/Search' element={<Search/>} />

        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App
