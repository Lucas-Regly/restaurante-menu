import React from "react";
import styles from './BototesContainer.module.css'



export const BototesContainer = ({handleFiltro, botaoClicado}) => {
    return (
        <div className={styles.flex}>
            <button  onClick={() => handleFiltro("Entradas")} className={botaoClicado === "Entradas" ? `${styles.acenderBtn} ${styles.btn} ${styles.flex}` : `${styles.apagarBtn} ${styles.btn} ${styles.flex}`}>
                <img src='../../../assets/entrada.png' alt="Entradas" />
                <p>Entradas</p>
            </button>

            <button onClick={() => handleFiltro("Massas")} className={botaoClicado === "Massas" ? `${styles.acenderBtn} ${styles.btn} ${styles.flex}` : `${styles.apagarBtn} ${styles.btn} ${styles.flex}`}>

                <img src='../../../assets/massa.png' alt="Massas" />
                <p>Massas</p>
            </button>
            <button onClick={() => handleFiltro("Carnes")} className={botaoClicado === "Carnes" ? `${styles.acenderBtn} ${styles.btn} ${styles.flex}` : `${styles.apagarBtn} ${styles.btn} ${styles.flex}`}>
                <img src='../../../assets/carne.png' alt="Carnes" />
                <p>Carnes</p>
            </button>
            <button onClick={() => handleFiltro("Bebidas")} className={botaoClicado === "Bebidas" ? `${styles.acenderBtn} ${styles.btn} ${styles.flex}` : `${styles.apagarBtn} ${styles.btn} ${styles.flex}`}>
                <img src='../../../assets/bebidas.png' alt="Bebidas" />
                <p>Bebidas</p>
            </button>
            <button onClick={() => handleFiltro("Saladas")} className={botaoClicado === "Saladas" ? `${styles.acenderBtn} ${styles.btn} ${styles.flex}` : `${styles.apagarBtn} ${styles.btn} ${styles.flex}`}>
                <img src='../../../assets/salada.png' alt="Saladas" />
                <p>Saladas</p>
            </button>
            <button onClick={() => handleFiltro("Sobremesas")} className={botaoClicado === "Sobremesas" ? `${styles.acenderBtn} ${styles.btn} ${styles.flex}` : `${styles.apagarBtn} ${styles.btn} ${styles.flex}`}>
                <img src='../../../assets/sobremesa.png' alt="Sobremesas" />
                <p>Sobremesas</p>
            </button>
        </div>
    )
}