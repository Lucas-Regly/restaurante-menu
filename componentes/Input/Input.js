import React from "react";
import style from './Input.module.css'

export const Input = ({textoBuscaDigitado, handleBusca}) => {
    return (
        <div className={`${style.flex} ${style.input_div}`}>
            <img src="../../../assets/lupa.png" alt="" />
           <input type="text" 
           value={textoBuscaDigitado}
           onChange={(event) => handleBusca(event.target.value)} />
        </div>
    )
}