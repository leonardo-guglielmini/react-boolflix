/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as FullStar }  from '@fortawesome/free-solid-svg-icons'
import { faStar as EmptyStar} from '@fortawesome/free-regular-svg-icons'

import italy from "../../assets/italy.png"
import germany from "../../assets/germany.png"
import japan from "../../assets/japan.png"
import uk from "../../assets/united-kingdom.png"
import france from "../../assets/france.png"
import spain from "../../assets/spain.png"
import placeholder from "../../assets/placeholder.png"

import { API_POSTER_IMG_PATH } from "../../config"

import style from "./Card.module.css"

export default function Card({title="", original_title="", original_language="", vote_average="", poster_path=""}){

    const supported_langs = ["it", "en", "de", "ja", "fr", "es"]

    let vote_final = Math.ceil(vote_average/2)
    const vote =[]
    console.log(vote_final)

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

    function showVote(){
        for(let i=0; i<5; i++){
            if(i+1<=vote_final){
                vote.push(<FontAwesomeIcon key={i} icon={FullStar}/>)
            }else vote.push(<FontAwesomeIcon key={i} icon={EmptyStar}/>)
        }
        return vote;
    }

    return(
        <div className={style.card}>
            <img src={poster_path ? `${API_POSTER_IMG_PATH+poster_path}` : placeholder} alt="poster" />
            <h1>{title}</h1>
            <h2>{original_title}</h2>
            {supported_langs.includes(original_language) ? <img className={style.flag} src={setFlag(original_language)}></img> : <h3>{original_language}</h3>}
            <div>
                {showVote()}
            </div>
        </div>
    )
}