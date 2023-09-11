import Pesquisa from '../components/Pesquisa/index.jsx'
import UltimosLancamentos from '../components/ultimosLancamentos/index.jsx'
import styled from 'styled-components'
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  li{
      list-style: none;
  }
`

function Home() {
  return (
    <>
      <AppContainer>
        <Pesquisa />
        <UltimosLancamentos/>
      </AppContainer>
    </>
  )
}
export default Home