import React, { useState } from "react";
import style from './Cardapio.module.css'
import { produtos } from "@/data/Dados";
import { Card } from "../Card/Card";
export const Cardapio = (props) => {

    return (
        <div className={`${style.flex} ${style.main_container}`}>
            <h2 className={style.subtitulo}>Cardápio</h2>
            <div className={`${style.subcontainer} ${style.flex}`}>

                <div className={`${style.card} ${style.flex}`}>
                    {props.card}
                </div>
            </div>
        </div>
    )
}