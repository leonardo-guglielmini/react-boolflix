import style from "./Footer.module.css"

export default function Footer(){
    return(
        <footer className={`${style.footer}`}>
            <p className={style.footerText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cupiditate architecto. Omnis similique incidunt sequi veritatis inventore repellat aliquid nostrum impedit quas fuga id vel, sint provident facilis maiores officia.</p>
        </footer>

    )
}