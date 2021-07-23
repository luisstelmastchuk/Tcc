import React from 'react'

// import { Container } from './styles';
import Piano from '../../components/Piano'
import Partitura from '../../components/Partitura'

import {
  ContainerHeader,
  ContainerAula,
  ContainerFooter,
  Texto,
  Botao,
  ContainerAulaInterno1,
  ContainerAulaInterno2,
  ContainerAulaInterno3,
  ContainerFooterInterno2,
  ContainerFooterInterno1,
} from './styles'

const Aula: React.FC = (batata) => {
  return (
    <>
      <ContainerHeader>
        <Texto>Lição 1</Texto>
      </ContainerHeader>

      <ContainerAula>
        <ContainerAulaInterno1>
          <Partitura nota={''} />
        </ContainerAulaInterno1>
        <ContainerAulaInterno2>
          <Piano />
        </ContainerAulaInterno2>
        <ContainerAulaInterno3>
          <Piano />
        </ContainerAulaInterno3>
      </ContainerAula>

      <ContainerFooter>
        <ContainerFooterInterno1>
          <Botao onClick={() => console.log('teste')}>Parar</Botao>
        </ContainerFooterInterno1>
        <ContainerFooterInterno2>
          <Botao onClick={() => console.log('teste')}>Repetir</Botao>
        </ContainerFooterInterno2>
      </ContainerFooter>
    </>
  )
}

export default Aula
