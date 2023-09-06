import logo from '../../img/logo.svg'
import styled from "styled-components"

const DivLogo = styled.div`
    display: flex;
    font-size: 30px;
    align-items:center;
`

const ImgLogo = styled.img`
    margin-right: 0.5rem;
`

function Logo(){
    return (
        <DivLogo>
            <ImgLogo src={logo} alt="logo AluraBooks" className='logoImg'/>
            <p><strong>Alura</strong>Books</p>
        </DivLogo>
    )
}

export default Logo