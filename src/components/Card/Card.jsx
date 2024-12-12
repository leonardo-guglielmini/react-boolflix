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

export default function Card({data}){


    const { title = data.name, original_title = data.original_name, original_language, vote_average, poster_path} = data

    const supported_langs ={
        it: italy,
        en: uk, 
        de: germany,
        fr: france,
        es: spain,
        ja: japan
    }

    const getFlagImg = (lang) => supported_langs[lang] || null
    
    let vote_final = Math.round(vote_average/2)

    const showVote = () => {
        return Array.from({ length: 5 }, (_, i) => (
        <FontAwesomeIcon key={i} icon={i < vote_final ? FullStar : EmptyStar} />
        ));
    }

    return(
        <div className={style.card}>
            <img src={poster_path ? `${API_POSTER_IMG_PATH+poster_path}` : placeholder} alt="poster" />
            <h1>{title}</h1>
            <h2>{original_title}</h2>
            {original_language in supported_langs ? 
            <img className={style.flag} src={getFlagImg(original_language)}/>
            : <h3>{original_language}</h3>}
            <div>
                {showVote()}
            </div>
        </div>
    )
}