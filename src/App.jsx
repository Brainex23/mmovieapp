import React from 'react'
import Header from './components/Header'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Movie from './pages/Movie'
import Tv from './pages/Tv'
import Series from './pages/Series'
import { useControl } from './ContextControl'
import NotFound from './pages/NotFound'
import Detail from './pages/Detail'

const App = () => {
  const {theme} = useControl()
  return (
    <div className={theme ? 'light' : 'dark'}>
      

      <Router>
      <Header/>
        <Routes>
         <Route path='/' element={<Movie/>} />
         <Route path='/Tv' element={<Tv/>} />
         <Route path='/Series' element={<Series/>} />
         <Route path='*' element={<NotFound/>}/>
         <Route path='/:id' element={<Detail/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App