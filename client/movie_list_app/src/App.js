import React, {useState, useEffect} from 'react';
import './App.css';

export default function App() {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    // const movies = () => {
      fetch('http://localhost:3001/movies')
      .then(res => res.json())
      .then(res => setMovieList(res))
      // .then(console.log(movieList))
    // }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {movieList.map(movie => <li>{movie.title}</li>)}
        </ul>
      </header>
    </div>
  );
}