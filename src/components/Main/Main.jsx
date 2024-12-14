import { useContext, useRef } from "react";
import GlobalContext from "../../context/GlobalContext";
import style from "./Main.module.css"

import List from "../List/List";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft }  from '@fortawesome/free-solid-svg-icons'
import { faArrowRight }  from '@fortawesome/free-solid-svg-icons'


export default function Main(){

    const {movies, series} = useContext(GlobalContext)

    const moviesListRef = useRef(null)
    const seriesListRef = useRef(null)

    const scrollLeft =(target) =>{
        if(target.current){
            target.current.scrollBy({
                top: 0,
                left: -200,
                behavior: "smooth"
            })
        }
    }

    const scrollRight =(target) =>{
        if(target.current){
            target.current.scrollBy({
                top: 0,
                left: 200,
                behavior: "smooth"
            })
        }
    }

    return(
        <div id="list" className={`${style.mainContent} container`}>
            <h1 className={style.title}>MOVIES</h1>
            <div className={style.section}>
                <button onClick={() => scrollLeft(moviesListRef)}><FontAwesomeIcon icon={faArrowLeft} className={style.arrow} /></button>
                <div ref={moviesListRef} className={style.list}>
                    <List data={movies}/>
                </div>
                <button onClick={() => scrollRight(moviesListRef)}><FontAwesomeIcon icon={faArrowRight} className={style.arrow} /></button>
            </div>
            <hr className={style.separator}/>
            <h1 className={style.title}>TV SERIES</h1>
            <div className={style.section}>
                <button onClick={() => scrollLeft(seriesListRef)}><FontAwesomeIcon icon={faArrowLeft} className={style.arrow} /></button>
                <div ref={seriesListRef} className={style.list}>
                    <List data={series}/>
                </div>
                <button onClick={() => scrollRight(seriesListRef)}><FontAwesomeIcon icon={faArrowRight} className={style.arrow} /></button>
            </div>
        </div>
    )
}