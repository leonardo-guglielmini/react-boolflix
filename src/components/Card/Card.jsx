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
import { useState } from 'react'

export default function Card({data}){


    const { title, original_title, original_language, overview, vote_average, poster_path} = data

    const [showDetail, setShowDetail] = useState(false)

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
            <img className={style.poster} src={poster_path ? `${API_POSTER_IMG_PATH+poster_path}` : placeholder} alt="poster" onMouseEnter={() => setShowDetail(true)} onMouseLeave={() => setShowDetail(false)}/>
            {showDetail ? 
                <div className={style.detailCard}>
                    <div className={style.details}>
                        <p className={style.title}>{title}</p>
                        <p className={style.ogTitle}> <span style={{fontWeight:"bold", color:"wheat"}}>Original title: </span>{original_title}</p>
                        <p className={style.overview}>Overview: {overview}</p>
                        <div className={style.info}>
                            {original_language in supported_langs ? 
                            <img className={style.flag} src={getFlagImg(original_language)}/>
                            : <h3>{original_language}</h3>}
                            <div className={style.vote}>
                                Vote: <span style={{color:'yellow'}}>{showVote()}</span>
                            </div>
                        </div>
                    </div>  
                </div> : null
            }
        </div>
    )
}