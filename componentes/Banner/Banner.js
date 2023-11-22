import React from "react";
import style from './Banner.module.css'

export const Banner = () => {
    return (
        <section className={style.secao_banner}>
            <div className={`${style.banner} ${style.flex}`}>
                <h1 className={style.titulo}>Restaurant</h1>
                <p className={style.paragrafo}>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
            </div>
        </section>
    )
}