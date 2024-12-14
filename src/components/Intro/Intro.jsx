/* eslint-disable react/prop-types */

import { useState, useRef } from "react"
import logo from "../../assets/logo.png"

import audio from "../../assets/intro_sound.wav"
import style from "./Intro.module.css"

export default function Intro({visible=()=>{}}){

    const [active, setActive] = useState(false)
    const audioRef = useRef(null)

    const start = (() => {
        if(audioRef.current){
            audioRef.current.volume=0.2
            audioRef.current.play()
        }
        const timer = setTimeout(() => {
            setActive(true)
        },100)
        visible()
        return () => clearTimeout(timer)
    })


    return(
        <div onClick={()=>start()} className={`${style.intro}`}>
            <audio className={style.audio} ref={audioRef} controls>
                <source src={audio} type="audio/wav"/>
            </audio>
            <img className={`${active ? style.active : "" } ${style.logo}`} src={logo}></img>
        </div>
    )
}