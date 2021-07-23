import styled, { css } from 'styled-components'
import { Button } from 'antd'

export const Container = styled.div`
  background-color: red;
  text-align: center;
`
interface IContainerInterno {
  isActived?: boolean
}
export const ContainerInterno = styled.div<IContainerInterno>`
  background-color: blue;
  position: relative;
  width: 50%;
  height: auto;
  left: 25%;
  ${(props) => {
    if (props.isActived) {
      return css`
        background-color: yellow;
      `
    }
  }}
`
export const Texto = styled.h1`
  color: green;
`
export const Botao = styled(Button)``
