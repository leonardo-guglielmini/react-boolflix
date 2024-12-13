import GlobalContext from "../../context/GlobalContext"
import { useContext, useState } from "react"

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
        <form className={style.form} onMouseEnter={() => setSearching(true)} onMouseLeave={() => setSearching(false)} onSubmit={(e) => {e.preventDefault(); search()}} action="">
                <input className={`${searching? style.searching : null} ${style.search}`} type="text" id="query" name="query" placeholder={`Search...`} onChange={(e) => {handleFormData(e)}} value={query}/>
                <input className={style.submit} type="submit"/>
            </form>
    )
}