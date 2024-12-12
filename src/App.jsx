import { useState } from 'react'
import './App.css'
import axios from "axios"

import { API_URI, API_KEY, API_MOVIE_PATH, API_SERIES_PATH } from './config'
import GlobalContext from './context/GlobalContext'

import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {

  

  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

  async function fetchMovies(query){
    const res = await axios.get(`${API_URI+API_MOVIE_PATH}`,
    {params:{
      api_key : API_KEY,
      query  
      }
    })
    try{
      //console.log(res.data)
      //console.log(res.data.results)
      setMovies(res.data.results)
    }
    catch(err){
      console.log(err)
    }
  }
  async function fetchSeries(query){
    const res = await axios.get(`${API_URI+API_SERIES_PATH}`,
    {params:{
      api_key : API_KEY,
      query  
      }
    })
    try{
      //console.log(res.data)
      //console.log(res.data.results)
      setSeries(res.data.results)
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <GlobalContext.Provider value={{movies, setMovies, fetchMovies, series, setSeries, fetchSeries}}>
      <Header/>
      <Main/>
    </GlobalContext.Provider>
  )
}

export default App
