import Searchbar from "../Searchbar/Searchbar"
import style from "./Header.module.css"

import logo from "../../assets/logo.png"

export default function Header(){
    return(
        <header className={`${style.header} container`}>
            <a href={""}><img src={logo} className={style.logo}></img></a>
            <div className={style.pages}>
                <a href={""}>Latest releases</a>
                <a href={""}>Upcoming film</a>
                <a href={""}>Catalogue</a>
            </div>
            <Searchbar/>
        </header>
    )
}