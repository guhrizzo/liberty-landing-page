import './limpa-nome.css' 
import { DarkModeProvider } from './DarkModeContext'
import { useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'

function LimpaNome () {
    
    return(
        <div className='ClearName-container'>
            <Nav />
            
            <Footer />
        </div>
    )
}

export default LimpaNome