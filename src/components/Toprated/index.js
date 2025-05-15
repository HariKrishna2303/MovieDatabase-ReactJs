import {useState, useEffect} from 'react'
import Movies from '../Movies'

const API_KEY = '76a3b00b83c8438422c7b7eb425b0645' // Replace with your actual API key
const topratedMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

const Toprated = () => {
  const [topratedMovies, settopRatedMovies] = useState([])
  const [page, setPage] = useState(1)
  const maxPages = 10 // Change this to the actual maximum number of pages

  const fetchMovies = async url => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      settopRatedMovies(data.results)
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }

  useEffect(() => {
    fetchMovies(topratedMoviesURL)
  }, [page])

  const handleNextPage = () => {
    if (page < maxPages) {
      setPage(page + 1)
    }
  }

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <div className="popular-movies">
      <h1 className="movies-heading">Top Rated</h1>
      <Movies movies={topratedMovies} />
      <button type="button" onClick={handlePrevPage} disabled={page === 1}>
        Prev
      </button>
      <button type="button" onClick={handleNextPage}>
        Next
      </button>
      <p>{page}</p>
    </div>
  )
}

export default Toprated
