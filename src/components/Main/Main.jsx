import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import Card from "../Card/Card";

export default function Main(){

    const {movies} = useContext(GlobalContext)
    return(
        <div>
            <h1>MOVIES</h1>
            {movies.map((movie)=>
                <Card key={movie.id} movie={movie}/>
            )}
        </div>
    )
}