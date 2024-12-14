/* eslint-disable react/prop-types */

import Card from "../Card/Card"
import style from "./List.module.css"

import loading from "../../assets/loading.gif"

export default function List({data=[]}){

    /* TEST HORIZONTAL SCROLL
    const toggleScroll = (e) =>{
        const div = document.getElementById("list")
        const scroll = e.deltaY
        console.log(div)

        div.scrollTo({
            top:0,
            left: div.scrollLeft + scroll,
            behavior: "smooth"
        })
    }
    */
    return(
        <section>
            <div id="list" className={style.list} /*onWheel{toggleScroll}*/>
                {data.length ? data.map((item)=>
                <Card key={item.id} data={item}/>)
                :
                <img className={style.loading} src={loading}></img>}
            </div>
        </section>
    )
}