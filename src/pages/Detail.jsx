import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'
const API_KEY = '778dcf02894f40ff2a5de48a0a87f49e'
const BASE_URL ='https://api.themoviedb.org/3'

const Detail = () => {

    const [trailer, setTrailer] = useState('')
    const [movie, setMovie] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        const FetchDetailTrailer = async ()=>{
        
            const response = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`)
            const data = await response.json()
            setTrailer(data.results.find((movie)=> movie.type === 'Trailer' && movie.site === 'YouTube'))
        }
    
        const FetchDetail = async ()=>{
            const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
            const data = await response.json()
            setMovie(data)
        }

        FetchDetail()
        FetchDetailTrailer()


    }, [])
  return (
    <div className='detail'>
        <div className='picc'>
        <img src={`${IMAGE_BASE_URL}/${movie.poster_path}`} alt={movie.title} />
        </div>
        
        <div className='youtube-info'>
        <div className='parag'>
        <p>{movie.overview}</p>
          <p> Release Date: {movie.release_date? movie.release_date : movie.first_air_date}</p>
          <p>Rating: {movie.vote_average?.toPrecision(2)}</p>
        </div>
        <div>
          <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            </div>
        </div>
        
    </div>
  )
}

export default Detail