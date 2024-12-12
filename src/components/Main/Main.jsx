import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import Card from "../Card/Card";
import style from "./Main.module.css"

export default function Main(){

    const {movies, series} = useContext(GlobalContext)
    return(
        <div className={`${style.mainContent} container`}>
            <section>
                <h1 className={style.title}>MOVIES</h1>
                <div className={style.list}>
                    {movies.map((movie)=>
                        <Card key={movie.id} data={movie}/>
                    )}
                </div>
            </section>
            
            <hr />
            <section>
                <h1 className={style.title} >SERIES</h1>
                <div className={style.list}>
                    {series.map((serie)=>
                        <Card key={serie.id} data={serie}/>
                    )}
                </div>
            </section>
        </div>
    )
}