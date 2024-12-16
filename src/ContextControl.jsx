import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'



const API_KEY = '778dcf02894f40ff2a5de48a0a87f49e'
const BASE_URL ='https://api.themoviedb.org/3'

const ContextControl = createContext()

export const ContextProvider = ({children}) => {
    const [movie, setMovie] = useState([])
    const [theme, setTheme]= useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [page, setPage] = useState(1)
    

    //Pagination state
    const PaginationPlus = ()=>{
        setPage(page + 1)
    }

    const PaginationMinus = ()=>{
        setPage(page>1? page - 1 : 1)
    }


    

    const ThemeToggle =()=>{
        setTheme(!theme)
    }

    const searchMovie = (e)=>{
        e.preventDefault()
        setSearchQuery(e.target.value)
    }

    //For  Movie Fetch
    const FetchMovie = async ()=>{

        const type = searchQuery ? '/search/movie' : '/discover/movie';
        
        const response = await fetch(`${BASE_URL}${type}?api_key=${API_KEY}&query=${searchQuery}&page=${page}`);
        const data = await response.json()
        setMovie(data.results)
    
    }

    const FetchTv = async ()=>{

        const type = searchQuery ? '/search/tv' : '/discover/tv';
        
        const response = await fetch(`${BASE_URL}${type}?api_key=${API_KEY}&query=${searchQuery}&page=${page}`);
        const data = await response.json()
        setMovie(data.results)
    
    }

    const FetchSeries = async ()=>{

        const type = searchQuery ? '/search/tv' : '/discover/tv';
        const genre = '&with_genres=10765'
        
        const response = await fetch(`${BASE_URL}${type}?api_key=${API_KEY}${genre}&query=${searchQuery}&page=${page}`);
        const data = await response.json()
        setMovie(data.results)
    
    }

    

   useEffect(()=>{
    FetchMovie()
    FetchTv()
    FetchSeries()
    
   }, [searchQuery, page]);
    
   


  return (
    <ContextControl.Provider value={{movie, theme, ThemeToggle, searchQuery, setSearchQuery,searchMovie, FetchMovie, FetchTv, FetchSeries, page,setPage, PaginationPlus, PaginationMinus}}>
        {children}
    </ContextControl.Provider>
  )
}

export const useControl = ()=> useContext(ContextControl);