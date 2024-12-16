import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useControl } from '../ContextControl'

const Header = () => {
    const {searchQuery, searchMovie}= useControl()
    const {theme, ThemeToggle} = useControl()


    // const searchMovie = (e)=>{
    //     e.preventDefault()
    //     setSearchQuery(e.target.value)
    // }

    
    

  return (
    <div className='header-container'>
        <div className='logo'>
            <h1>MyMovieApp</h1>
        </div>
        <div className='home-tv-series'>
            <Link to='/'>Movie</Link>
            <Link to='/Tv'>TV</Link>
            <Link to='/Series'>Series</Link>
            
            
        </div>

        <div className='search-button'>
            <input type="text" placeholder='Movie TV Series' value={searchQuery} onChange={searchMovie}  />

            <button onClick={ThemeToggle} >{theme ? 'dark' : 'light'}</button>
        </div>
    </div>
  )
}

export default Header