import IconesHeader from '../Icones/index.jsx'
import Logo from '../Logo/index.jsx'
import OpcoesHeader from '../OpcoesHeader/index.jsx'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const AppHeader = styled.header`
    background-color: #fff;
    display: flex;
    min-height: 6rem;
    align-items: center;
    justify-content: space-around;
    padding: 0 5rem;
`

function Header() {
    return(
        <AppHeader>
            <Link to="/">
                <Logo/>
            </Link>
            
            <OpcoesHeader/>
            <IconesHeader/>
        </AppHeader>
    )

}

export default Header