import { useState } from 'react'
import './App.css'
import axios from "axios"

import { API_URI, API_KEY } from './config'
import GlobalContext from './context/GlobalContext'
import Header from './components/Header/Header'

function App() {

  const API_MOVIE_PATH = '3/search/movie'

  const [movies, setMovies] = useState([])

  function fetchMovies(query){
    axios.get(`${API_URI+API_MOVIE_PATH}`,
    {params:{
      api_key : API_KEY,
      query  
      }
    })
    .then(res => {
      setMovies(res.data)
      console.log(res.data)
    })
    .catch(err =>{
      console.error(err)
    })
  }

  return (
    <GlobalContext.Provider value={{movies, setMovies, fetchMovies}}>
      <Header></Header>
    </GlobalContext.Provider>
  )
}

export default App
