import style from "./Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import logoSmall from "../../assets/logo-small.png"

export default function Footer(){
    return(
        <footer className={`${style.footer}`}>
            <div>
                <img src={logoSmall} alt="logo" />
                <ul className={style.socials}>
                    <li><FontAwesomeIcon icon={faDownload} /></li>
                    <li><FontAwesomeIcon icon={faUser} /></li>
                    <li><FontAwesomeIcon icon={faEnvelope} /></li>
                </ul>
            </div>
            <p className={style.footerText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis distinctio velit beatae fugiat a perferendis dicta eveniet. Quae ipsam suscipit blanditiis cupiditate cumque! Reiciendis beatae, et sit nobis sed quibusdam?</p>
            <ul className={style.info}>
                <li>Chi siamo</li>
                <li>Dove andiamo</li>
                <li>Cosa facciamo</li>
                <li>Gerry Scotti</li>
            </ul>
        </footer>

    )
}