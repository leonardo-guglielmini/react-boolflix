import { useState } from 'react'
import './App.css'
import axios from "axios"

import { API_URI, API_KEY, API_MOVIE_PATH, API_SERIES_PATH } from './config'
import GlobalContext from './context/GlobalContext'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {

  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

  function unifyResults(data){
    const {name, original_name, ...rest} = data;

    return{
      title: name,
      original_title: original_name,
      ...rest
    }
  }

  async function fetchData(query){
    const resMovies = await axios.get(`${API_URI+API_MOVIE_PATH}`,
    {params:{
      api_key : API_KEY,
      query  
      }
    })
    try{
      setMovies(resMovies.data.results)
    }
    catch(err){
      console.log(err)
    }

    const resSeries = await axios.get(`${API_URI+API_SERIES_PATH}`,
      {params:{
        api_key : API_KEY,
        query  
        }
      })
      try{
        const unifiedResults = resSeries.data.results.map((data) => unifyResults(data))
        setSeries(unifiedResults)
      }
      catch(err){
        console.log(err)
      }
  }

  return (
    <GlobalContext.Provider value={{movies, setMovies, series, setSeries, fetchData}}>
      <Header/>
      <Main/>
      <Footer/>
    </GlobalContext.Provider>
  )
}

export default App
