import React from 'react'

import { Container, ContainerInterno, Texto, Botao } from './styles'

interface IProps {
  isActived?: boolean
}

const MenuPrincipal: React.FC<IProps> = (batata) => {
  return (
    <Container>
      <ContainerInterno isActived={batata.isActived}>
        <Texto>Olá Mundo</Texto>
        <Botao onClick={() => console.log('teste')}>Isso e um teste</Botao>
      </ContainerInterno>
    </Container>
  )
}

export default MenuPrincipal
