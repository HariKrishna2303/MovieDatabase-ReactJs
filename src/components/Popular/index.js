import {useState, useEffect} from 'react'
import Movies from '../Movies'

const API_KEY = 'fb7bb23f03b6994dafc674c074d01761' // Replace with your actual API key
const popularMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const [page, setPage] = useState(1)
  const maxPages = 10 // Change this to the actual maximum number of pages

  const fetchMovies = async url => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPopularMovies(data.results)
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }

  useEffect(() => {
    fetchMovies(popularMoviesURL)
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
      <h1 className="movies-heading">Popular Movies</h1>
      <Movies movies={popularMovies} />
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

export default PopularMovies
