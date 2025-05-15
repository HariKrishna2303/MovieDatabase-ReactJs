import {Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import Movie from './components/Movie'
import Popular from './components/Popular'
import SearchedMovies from './components/Searchmovies'
import Toprated from './components/Toprated'
import Upcoming from './components/Upcoming'

import './App.css'

// write your code here
const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Popular} />
      <Route exact path="/top-rated" component={Toprated} />
      <Route exact path="/upcoming" component={Upcoming} />
      <Route exact path="/movie/:id" component={Movie} />
      <Route exact path="/search/:query" component={SearchedMovies} />
    </Switch>
  </div>
)

export default App
