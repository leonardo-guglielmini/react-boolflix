import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import style from "./Main.module.css"

import List from "../List/List";


export default function Main(){

    const {movies, series} = useContext(GlobalContext)

    return(
        <div className={`${style.mainContent} container`}>
            <h1 className={style.title}>MOVIES</h1>
            <List data={movies}/>
            <hr className={style.separator}/>
            <h1 className={style.title}>TV SERIES</h1>
            <List data={series}/>
        </div>
    )
}