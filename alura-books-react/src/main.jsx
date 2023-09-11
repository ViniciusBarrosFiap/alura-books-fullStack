import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/index.jsx'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Favoritos from './routes/Favoritos.jsx';
// eslint-disable-next-line react-refresh/only-export-components
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  li{
    list-style: none;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>

    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/favoritos' element={<Favoritos/>} />
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
