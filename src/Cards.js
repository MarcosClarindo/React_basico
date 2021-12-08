import React from "react";
import './Cards.css'

// recebendo os filhos
const Cards = ( {children} ) => {

    return(
        <div className="cards">
            {children}
        </div>
    )
}

export default Cards