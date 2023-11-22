import React, { useState } from "react";
import { Banner } from "@/componentes/Banner/Banner";
import styles from "./MainPage.module.css"
import { BototesContainer } from "@/componentes/BotoesContainer/BotoesContainer";
import { Input } from "@/componentes/Input/Input";
import { Cardapio } from "@/componentes/Cardápio/Cardapio";
import { Card } from "@/componentes/Card/Card";
import { buscarProdutos, filtraProdutos, produtosEntrada } from "@/componentes/service/service";
const MainPage = () => {
   const [textoBuscaDigitado, setTextoBuscaDigitado] = useState('')
   const [botaoClicado, setBotaoClicado] = useState("Entradas")
   const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntrada)
   
   const handleBusca = (textoDigitado) => {
      setTextoBuscaDigitado(textoDigitado);
      textoDigitado.length >= 3 && setDadosFiltrados(buscarProdutos(textoDigitado));
      setBotaoClicado("");
      textoDigitado.length === 0 && setDadosFiltrados(produtosEntrada);
      setBotaoClicado('Entradas');
   };
   
   const handleFiltro = (categoria) => {
      setTextoBuscaDigitado("");
      setDadosFiltrados(filtraProdutos(categoria));
      setBotaoClicado(categoria);
   };

  
   return (
      <main className={styles.limita_largura}>
         <Banner />
         <BototesContainer
            handleFiltro={handleFiltro}
            botaoClicado={botaoClicado}
         />
         <Input
          handleBusca={handleBusca}
          textoBuscaDigitado={textoBuscaDigitado}
         />
         <Cardapio
            card={dadosFiltrados.map((i) => (
               <Card key={i.id}
                  nome={i.nome}
                  categoria={i.categoria}
                  descricao={i.descricao}
                  preco={i.preco}
                  img={i.imagem}
               />
            ))}
         />
      </main>
   )
}

export default MainPage