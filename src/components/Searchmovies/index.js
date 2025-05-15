import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Movies from '../Movies'

const API_KEY = '76a3b00b83c8438422c7b7eb425b0645'

const SearchedMovies = () => {
  const {query} = useParams()
  const [searchedMovies, setSearchedMovies] = useState([])

  const fetchSearchedMovies = async qr => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${qr}&page=1`,
      )
      const data = await response.json()
      setSearchedMovies(data.results)
    } catch (error) {
      console.error('Error fetching searched movies:', error)
    }
  }

  useEffect(() => {
    fetchSearchedMovies(query)
    // react-hooks/exhaustive-deps
  }, [query])

  return (
    <div className="searched-movies">
      <h1 className="movies-heading">Search Results for {query}</h1>
      <Movies movies={searchedMovies} />
    </div>
  )
}

export default SearchedMovies
