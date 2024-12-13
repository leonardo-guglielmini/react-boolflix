import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import style from "./Main.module.css"

import List from "../List/List";


export default function Main(){

    const {movies, series} = useContext(GlobalContext)

    return(
        <div className={`${style.mainContent} container`}>
            <List data={movies}/>
            <hr className={style.separator}/>
            <List data={series}/>
        </div>
    )
}