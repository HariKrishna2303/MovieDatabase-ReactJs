import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'

import './index.css'

const Header = () => {
  const [search, setSearch] = useState('')
  const history = useHistory()

  const change = event => {
    setSearch(event.target.value)
  }

  const searchtheItem = () => {
    history.push(`/search/${search}`)
  }

  return (
    <div className="nav">
      <h1>movieDB</h1>
      <div className="list">
        <input type="text" value={search} onChange={change} />
        <button type="button" onClick={searchtheItem}>
          Search
        </button>
      </div>
      <div className="list">
        <Link to="/">
          <button type="button">Popular</button>
        </Link>
        <Link to="/top-rated">
          <button type="button">Top Rated</button>
        </Link>
        <Link to="/upcoming">
          <button type="button">Upcoming</button>
        </Link>
      </div>
    </div>
  )
}

export default Header
