import React from 'react'
import { useControl } from '../ContextControl'

const PageButton = () => {
    const {page, setPage, PaginationPlus, PaginationMinus} = useControl()
  return (
    <div className='pageButton'>
        <button  onClick={PaginationMinus}>Previous</button>
             {page}
        <button onClick={PaginationPlus}>Next</button>
    </div>
  )
}

export default PageButton