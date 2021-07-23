import React from 'react'

import { TeclasStyle, TeclaTexto, TeclaPStyle, TeclaPTexto } from './styles'

interface ITecla {
  tecla?: string
  nota?: string
}

const Teclas: React.FC<ITecla> = (props) => {
  const teclaMenor = props.nota.length > 2 ? true : false
  const teclaNota = props.nota.toUpperCase()
  const teclaPressionada = props.tecla.toUpperCase()

  const teclap = teclaPressionada == teclaNota ? true : false

  return (
    <>
      {teclaMenor ? (
        <TeclaPStyle isActived={teclap}>
          <TeclaPTexto>{teclaNota}</TeclaPTexto>
        </TeclaPStyle>
      ) : (
        <TeclasStyle isActived={teclap}>
          <TeclaTexto>{teclaNota}</TeclaTexto>
        </TeclasStyle>
      )}
    </>
  )
}

export default Teclas
