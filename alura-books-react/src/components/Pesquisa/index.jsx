import Input from "../../components/Input/index.jsx"
import styled from 'styled-components'
import { useEffect, useState } from "react"
import { getLivros } from "../../services/livros.jsx"

const PesquisaContainer = styled.section`
    padding: 85px 0;
    color: #fff;
    text-align:center;
`
const Titulo = styled.h2`
    font-size:32px;
`
const Subtitulo = styled.h3`
    padding-top:15px;
    font-size:16px;
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        const livrosDaAPI = getLivros() 
        setLivros(livrosDaAPI)}, 
        [])

    console.log(livrosPesquisados)

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar ?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={(e) => {
                    const textoDigitado = e.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            { livrosPesquisados.map((livro) => (
                // eslint-disable-next-line react/jsx-key
                <div>
                    <p>{livro.nome}</p>
                    <img src={livro.src} alt="imagem livro"></img>
                </div>
            )) }
        </PesquisaContainer>
    )
}

export default Pesquisa