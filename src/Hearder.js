import React from 'react';
import './Hearder.css'

// INTERPOLAÇÃO

function Header({titulo, subtitulo}){
    return(
        <header className = "header">
           <h1> {titulo} </h1>
           <h2> {subtitulo} </h2>
        </header>
    )
}

export default Header;