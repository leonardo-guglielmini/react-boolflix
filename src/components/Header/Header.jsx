import GlobalContext from "../../context/GlobalContext"
import { useContext, useState } from "react"

import style from "./Header.module.css"


export default function Header(){
    
    const {fetchMovies, fetchSeries} = useContext(GlobalContext)
    const [query, setQuery] = useState("")

    function handleFormData(e){
        setQuery(e.target.value)
    }

    function search(){
        fetchMovies(query);
        fetchSeries(query);
    }

    return(
        <header className={`${style.header} container`}>
            <h1 className={style.logo}>BOOLFLIX</h1>
            <form onSubmit={(e) => {e.preventDefault(); search()}} action="">
                <input type="text" id="query" name="query" placeholder="Inserisci il titolo" onChange={(e) => {handleFormData(e)}} value={query}/>
            <input type="submit" value="Invia"/>
            </form>
        </header>
    )
}