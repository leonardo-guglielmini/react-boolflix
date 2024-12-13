import Searchbar from "../Searchbar/Searchbar"
import style from "./Header.module.css"


export default function Header(){
    
    return(
        <header className={`${style.header} container`}>
            <a className={style.logo} href={""}>BOOLFLIX</a>
            <Searchbar/>
        </header>
    )
}