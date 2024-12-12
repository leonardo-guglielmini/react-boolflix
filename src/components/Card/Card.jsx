/* eslint-disable react/prop-types */
import italy from "../../assets/italy.png"
import germany from "../../assets/germany.png"
import japan from "../../assets/japan.png"
import uk from "../../assets/united-kingdom.png"
import france from "../../assets/france.png"
import spain from "../../assets/spain.png"

import style from "./Card.module.css"

export default function Card({movie}){

    const supported_langs = ["it", "en", "de", "jp", "fr", "es"]
    const {title, original_title, original_language,vote_average} = movie;

    function setFlag(lang){
        switch(lang){
            case 'it':
                return(italy);
            case 'ja':
                return(japan);
            case 'en':
                return(uk);
            case "de":
                return(germany);
            case "fr":
                return(france);
            case "es":
                return(spain);
        }
    }

    return(
        
        <div>
            {console.log(movie)}
            <h1>{title}</h1>
            <h2>{original_title}</h2>
            {supported_langs.includes(original_language) ? <img className={style.flag} src={setFlag(original_language)}></img> : <h3>{original_language}</h3>}
            <h3>{vote_average}</h3>
        </div>
    )
}