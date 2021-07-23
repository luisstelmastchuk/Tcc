import React from 'react'

import { PianoStyle } from './styles'
import Teclas from '../Teclas'
import { NOTAS } from '../../global/constants'

const Piano: React.FC = () => {
  return (
    <PianoStyle>
      {NOTAS.map((nota) => (
        <Teclas nota={nota.name} key={nota.key} tecla={nota.key} />
      ))}
    </PianoStyle>
  )
}

export default Piano
