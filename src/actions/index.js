export const getLatestMovies=() =>({

    type: 'GET_LATEST_MOVIES'

})

export const getPopularMovies=()=>({
    type: 'GET_POPULAR_MOVIES'
})

export const getTopRatedMovies=()=>({
    type: 'GET_TOP_RATED_MOVIES'
})
export const getMovieDetails=(ID)=>({
     type: 'GET_MOVIE_DETAILS', payload:{ID}
  })
export const bookMovie=(bookingData)=>({
    type:'BOOK_MOVIE',
    payload:bookingData
})