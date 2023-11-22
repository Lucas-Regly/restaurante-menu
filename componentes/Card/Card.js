import React from "react";
import style from './Card.module.css'

export const Card = (props) => {
    return (
        <div className={`${style.cartao} ${style.flex}`}>
            <div className={style.primeiro_subcontainer}>
                <img src={props.img} alt={props.nome} />
            </div>
            <div className={`${style.segundo_subcontainer} ${style.flex}`}>
                <h3>{props.nome}</h3>
                <span className={style.span}>{props.categoria}</span>
                <p className={style.p}>{props.descricao}</p>
                <div className={style.preco_container}>
                    <span className={`${style.preco} ${style.flex}`}>{new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(props.preco)}</span>
                </div>
            </div>
        </div>
    )
}