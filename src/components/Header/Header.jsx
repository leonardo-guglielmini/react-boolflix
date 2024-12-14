import Searchbar from "../Searchbar/Searchbar"
import style from "./Header.module.css"

import logoText from "../../assets/logo-text.png"
import logoSmall from "../../assets/logo-small.png"

export default function Header(){
    return(
        <header className={`${style.header}`}>
            <a href={""}><img src={logoText} className={style.logoText}></img></a>
            <div className={style.pages}>
                <a href={""}>Latest releases</a>
                <a href={""}>Upcoming film</a>
                <a href={""}>Catalogue</a>
            </div>
            <Searchbar/>
            <a href={""}><img src={logoSmall} className={style.logoSmall}></img></a>
        </header>
    )
}