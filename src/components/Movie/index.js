import {useState, useEffect} from 'react'

const API_KEY = '76a3b00b83c8438422c7b7eb425b0645'

const Movie = ({match}) => {
  const [movie, setMovie] = useState(null)

  const fetchMovieDetails = async movieId => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
      )
      const data = await response.json()
      setMovie(data)
    } catch (error) {
      console.error('Error fetching movie details:', error)
    }
  }

  useEffect(() => {
    fetchMovieDetails(match.params.id)
  }, [match.params.id])

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          {/* Display other movie details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Movie
