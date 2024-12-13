import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import Card from "../Card/Card";
import style from "./Main.module.css"

import loading from "../../assets/loading.gif"

export default function Main(){

    const {movies, series} = useContext(GlobalContext)
    return(
        <div className={`${style.mainContent} container`}>
            <section>
                <h1 className={style.title}>MOVIES</h1>
                <div className={style.list}>
                    {movies.length ? movies.map((movie)=>
                        <Card key={movie.id} data={movie}/>)
                    :
                    <img className={style.loading} src={loading}></img>}
                </div>
            </section>
            
            <hr className={style.separator}/>
            <section>
                <h1 className={style.title} >SERIES</h1>
                <div className={style.list}>
                    {series.length ? series.map((serie)=>
                        <Card key={serie.id} data={serie}/>)
                    :
                    <img className={style.loading} src={loading}></img>}
                </div>
            </section>
        </div>
    )
}