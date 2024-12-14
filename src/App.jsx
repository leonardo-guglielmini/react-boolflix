import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import { CSSTransition } from 'react-transition-group';

import { API_URI, API_KEY, API_MOVIE_PATH, API_SERIES_PATH, API_URI_DISCOVER } from './config'
import GlobalContext from './context/GlobalContext'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'

function App() {

  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

  const [showIntro, setShowIntro] = useState(true)

  const page = 1;
  const sort = "popularity.desc"

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
      console.error(err)
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
        console.error(err)
      }
  }

  useEffect(() =>{  async function fetchPopular(){
    const resMovies = await axios.get(`${API_URI_DISCOVER+API_MOVIE_PATH}`,
    {params:{
      api_key : API_KEY,
      page,
      sort_by : sort 
      }
    })
    try{
      setMovies(resMovies.data.results)
    }
    catch(err){
      console.error(err)
    }

    const resSeries = await axios.get(`${API_URI_DISCOVER+API_SERIES_PATH}`,
      {params:{
        api_key : API_KEY,
        page,
        sort_by : sort 
        }
      })
      try{
        const unifiedResults = resSeries.data.results.map((data) => unifyResults(data))
        setSeries(unifiedResults)
      }
      catch(err){
        console.error(err)
      }
  }
  fetchPopular()
  },[])


  const visible = (() => {
    const timer = setTimeout(()=>{
      setShowIntro(false)
    }, 3500)
    return () => clearTimeout(timer)
  })

  return (
    <GlobalContext.Provider value={{movies, setMovies, series, setSeries, fetchData}}>
      <CSSTransition 
        in={showIntro}
        timeout={500}
        classNames="fade"
        unmountOnExi>
          <Intro visible={() => visible()}/>
        </CSSTransition>
      <CSSTransition
        in={!showIntro}
        timeout={500}
        classNames="fade"
        unmountOnExit>
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
      </CSSTransition>
    </GlobalContext.Provider>
  )
}

export default App
