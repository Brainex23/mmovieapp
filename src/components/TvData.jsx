import React from 'react'
import { useControl } from '../ContextControl'
import { useNavigate } from 'react-router-dom'
import PageButton from './PageButton'



const TvData = () => {
    const {movie, FetchTv} = useControl()
    const navigate = useNavigate()

    FetchTv()

  return (
    <div>
      <div className='movieList'>
        {movie.map((mov)=>{
              return (
                <div key={mov.id} onClick={()=> navigate(`/${mov.id}`)} >  
                    
                    <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${mov.poster_path}`} alt="" width='250px' height='300px' />
                </div>
              )
        })}
    </div>
    <div>
      <PageButton/>
    </div>
    </div>
  )
}

export default TvData