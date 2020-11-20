import React, { useState, createContext } from 'react'

export const TemaContext = createContext();

export const TemaProvider = props => {
    const [dataTema, setDataTema] = useState(1)

    return (
        <>
            <TemaContext.Provider value={[dataTema, setDataTema]}>
                {props.children}
            </TemaContext.Provider>
        </>
    )
}
