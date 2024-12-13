import GlobalContext from "../../context/GlobalContext"
import { useContext, useState } from "react"

import style from "./Header.module.css"


export default function Header(){
    
    const {fetchMovies, fetchSeries} = useContext(GlobalContext)
    const [query, setQuery] = useState("")

    const [searching, setSearching] = useState(false)

    function handleFormData(e){
        setQuery(e.target.value)
        
    }

    function search(){
        fetchMovies(query);
        fetchSeries(query);
        setQuery("")
    }

    return(
        <header className={`${style.header} container`}>
            <a className={style.logo} href={""}>BOOLFLIX</a>
            <form className={style.form} onMouseEnter={() => setSearching(true)} onMouseLeave={() => setSearching(false)} onSubmit={(e) => {e.preventDefault(); search()}} action="">
                <input className={`${searching? style.searching : null} ${style.search}`} type="text" id="query" name="query" placeholder={`Search...`} onChange={(e) => {handleFormData(e)}} value={query}/>
                <input className={style.submit} type="submit"/>
            </form>
        </header>
    )
}