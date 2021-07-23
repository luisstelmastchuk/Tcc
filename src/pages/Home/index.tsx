import React from 'react'
import { Container } from './styles'
import MenuPrincipal from '../../containers/MenuPrincipal'
import Piano from '../../components/Piano'
import Aula from '../../containers/Aulas'

const Home: React.FC = () => {
  return (
    <Container>
      <Aula />
    </Container>
  )
}

export default Home
