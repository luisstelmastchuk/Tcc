import React from 'react'
import {
  PartituraStyle,
  PartituraInterno,
  C0,
  C01,
  D0,
  E0,
  F0,
  G0,
  A0,
  B0,
  C1,
  D1,
  E1,
  F1,
  G1,
  A1,
  B1,
  DF0,
  EF0,
  GF0,
  AF0,
  BF0,
  DF1,
  EF1,
  GF1,
  AF1,
  BF1,
} from './styles'

// import { Container } from './styles';

interface INota {
  nota: string
}

const Partitura: React.FC<INota> = (props) => {
  const NotaA = props.nota

  return (
    <PartituraStyle>
      <PartituraInterno>
        <G1 isActived={NotaA}>
          <AF1 isActived={NotaA}>#</AF1>
        </G1>
        <A1 isActived={NotaA}>
          <BF1 isActived={NotaA}>#</BF1>
        </A1>
        <B1 isActived={NotaA}></B1>
      </PartituraInterno>
      <PartituraInterno>
        <E1 isActived={NotaA}></E1>
        <F1 isActived={NotaA}>
          <GF1 isActived={NotaA}>#</GF1>
        </F1>
      </PartituraInterno>
      <PartituraInterno>
        <C1 isActived={NotaA}>
          <DF1 isActived={NotaA}>#</DF1>
        </C1>
        <D1 isActived={NotaA}>
          <EF1 isActived={NotaA}>#</EF1>
        </D1>
      </PartituraInterno>
      <PartituraInterno>
        <A0 isActived={NotaA}>
          <BF0 isActived={NotaA}>#</BF0>
        </A0>
        <B0 isActived={NotaA}></B0>
      </PartituraInterno>
      <PartituraInterno>
        <F0 isActived={NotaA}>
          <GF0 isActived={NotaA}>#</GF0>
        </F0>
        <G0 isActived={NotaA}>
          <AF0 isActived={NotaA}>#</AF0>
        </G0>
      </PartituraInterno>
      <PartituraInterno>
        <C0 isActived={NotaA}>
          <C01 isActived={NotaA}></C01>
          <DF0 isActived={NotaA}>#</DF0>
        </C0>
        <D0 isActived={NotaA}>
          <EF0 isActived={NotaA}>#</EF0>
        </D0>
        <E0 isActived={NotaA}></E0>
      </PartituraInterno>
    </PartituraStyle>
  )
}

export default Partitura
