import { produtos } from "@/data/Dados";

export const buscarProdutos = (textoDigitado) => {
    return produtos.filter(produto => produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) || produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase()))
}

export const filtraProdutos = (categoria) => {
 return produtos.filter(produto => produto.categoria === categoria )
}

export const produtosEntrada = filtraProdutos("Entradas")