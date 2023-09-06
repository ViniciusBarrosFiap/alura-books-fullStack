import IconesHeader from '../Icones/index.jsx'
import Logo from '../Logo/index.jsx'
import OpcoesHeader from '../OpcoesHeader/index.jsx'
import styled from 'styled-components'

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
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </AppHeader>
    )

}

export default Header