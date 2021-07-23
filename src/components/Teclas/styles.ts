import styled, { css } from 'styled-components'

export const TeclaTexto = styled.h5`
  position: relative;
  color: black;
  font-weight: 600;
  font-size: 18px;
  margin-top: 150px;
  pointer-events: none;
  text-align: center;
`

interface ITeclaAtiva {
  isActived?: boolean
}

export const TeclasStyle = styled.div<ITeclaAtiva>`
  background-color: white;
  border: 2px solid black;
  height: 200px;
  width: 60px;
  ${(props) => {
    if (props.isActived) {
      return css`
        background-color: #00ff00;
      `
    }
  }}
`

export const TeclaPStyle = styled.div<ITeclaAtiva>`
  position: relative;
  background-color: black;
  margin-left: -17px;
  margin-right: -17px;
  height: 100px;
  width: 30px;
  z-index: 2;
  ${(props) => {
    if (props.isActived) {
      return css`
        background-color: #00ff00;
      `
    }
  }}
`
export const TeclaPTexto = styled.h5`
  position: relative;
  color: white;
  font-weight: 600;
  font-size: 12px;
  margin-top: 70px;
  pointer-events: none;
  text-align: center;
`
