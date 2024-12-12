import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import Card from "../Card/Card";
import style from "./Main.module.css"

export default function Main(){

    const {movies, series} = useContext(GlobalContext)
    return(
        <div className={style.mainContent}>
            <section>
                <h1 className={style.title}>MOVIES</h1>
                {movies.map(({id, title, original_title, original_language, vote_average, poster_path})=>
                    <Card key={id} title={title} original_title={original_title} original_language={original_language} vote_average={vote_average} poster_path={poster_path}/>
                )}
            </section>
            
            <hr />
            <section>
                <h1 className={style.title} >SERIES</h1>
                {series.map(({id, name, original_name, original_language, vote_average, poster_path})=>
                    <Card key={id} title={name} original_title={original_name} original_language={original_language} vote_average={vote_average} poster_path={poster_path}/>
                )}
            </section>
        </div>
    )
}