import GlobalContext from "../../context/GlobalContext"
import { useContext, useState } from "react"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass as searchIcon }  from '@fortawesome/free-solid-svg-icons'

import style from "./Searchbar.module.css"

export default function Searchbar(){
    const {fetchData} = useContext(GlobalContext)
    const [query, setQuery] = useState("")

    const [searching, setSearching] = useState(false)

    function handleFormData(e){
        setQuery(e.target.value)
    }

    function search(){
        fetchData(query);
        setQuery("")
    }

    return(
        <form className={style.form} onSubmit={(e) => {e.preventDefault(); search()}} action="">
            <input onMouseEnter={() => setSearching(true)} onMouseLeave={() => setSearching(false)} className={`${searching? style.searching : null} ${style.search}`} type="text" id="query" name="query" placeholder={`Search...`} onChange={(e) => {handleFormData(e)}} value={query}/>
            <button type="submit" className={style.submit}><FontAwesomeIcon icon={searchIcon} /></button>
        </form>
    )
}