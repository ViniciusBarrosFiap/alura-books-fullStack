import { Link } from 'react-router-dom'
import styled from 'styled-components'

const UlOpcoes = styled.ul`
    display: flex;
    flex-direction: row;
    margin-left: 2rem;
`
const LiOpcoes = styled.li`
    font-size: 16px;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 5rem;
    cursor: pointer;
    text-align: center;
`

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "ESTANTE"]
function OpcoesHeader(){
    return(
    <UlOpcoes>
        { textoOpcoes.map((texto)=> (
            // eslint-disable-next-line react/jsx-key, react/jsx-no-comment-textnodes
            <Link to={`/${texto.toLowerCase()}`}>
                <LiOpcoes><p>{texto}</p></LiOpcoes>
            </Link>
        
        ) ) }
    </UlOpcoes>
    )
}

export default OpcoesHeader