import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'
import styled from "styled-components"

const Icone = styled.li`
    margin-right: 2rem;
    width: 25px;
    align-items: center;
`

const Icones = styled.ul`
    display: flex;
    margin-left: 2rem;
`

const icons = [perfil, sacola]
function IconesHeader(){
    return(
        <Icones>
            {icons.map((icone)=>(
            // eslint-disable-next-line react/jsx-key
            <Icone className='icon'><img src={icone} alt="" /></Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader