import styled, { css } from 'styled-components'

import { IoIosRemoveCircleOutline } from 'react-icons/io'

import {
  Select as SelectAnt,
  Form as FormAnt,
  Input as InputAnt,
  Button as ButtonAnt,
  Row as RowAnt,
  Col as ColAnt,
  Steps as StepsAnt,
} from 'antd'

const { Step: StepAnt } = StepsAnt

const { Option: OptionAnt } = SelectAnt

export const TopSideContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 50%;
  padding: 20px;
`

export const QueryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100%;

  background: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`

export const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 100px;
`

export const ReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40%;
  height: 100%;

  background: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`

export const ReviewWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 50%;
  height: 50%;
`

export const BottomSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 97%;
  height: 47%;
  margin: 10px auto;

  background: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`
export const Select = styled(SelectAnt)`
  width: 100%;
`

export const Option = styled(OptionAnt)``

const scrollCSS = css`
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #bbb8b826;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #80808073;
    border-radius: 20px;
  }
`
export const Form = styled(FormAnt)`
  width: 100%;
  height: 500px;
  padding: 3%;

  overflow-y: scroll;
  display: inline-block;

  overflow-y: scroll;

  ${scrollCSS}
`

export const Row = styled(RowAnt)``

export const Col = styled(ColAnt)`
  padding: 5px;
`

export const Input = styled(InputAnt)`
  width: 100%;
`

export const Button = styled(ButtonAnt)`
  margin: 0px 5px;
`

export const WhereLabel = styled.p`
  font-size: 14px;
`

export const RemoveIcon = styled(IoIosRemoveCircleOutline)`
  width: 20px;
  height: 20px;
  color: white;
`

export const StepsWrapper = styled.div`
  display: inline-block;

  width: 100%;
  height: 15%;

  padding: 10px;
  border: 1px solid #00000014;
  border-radius: 15px;
`

export const TableWrapper = styled.div`
  display: inline-block;

  width: 100%;
  height: 85%;

  overflow: scroll;
  ${scrollCSS}
`

export const Steps = styled(StepsAnt)``

export const Step = styled(StepAnt)``
