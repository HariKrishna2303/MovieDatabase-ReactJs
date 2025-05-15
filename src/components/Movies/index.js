import {Link} from 'react-router-dom'

const Movies = ({movies}) => (
  <li>
    <Link to={`/movie/${movies.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w185${movies.poster_path}`}
        alt={movies.title}
      />
      <h3>{movies.title}</h3>
      <p>Rating: {movies.vote_average}</p>
      <button type="button">View Details</button>
    </Link>
  </li>
)

export default Movies
