import styled from 'styled-components'
import { AiOutlineSwap } from 'react-icons/ai'
import { IoIosRemoveCircleOutline } from 'react-icons/io'

import {
  Button as ButtonAnt,
  Form as FormAnt,
  Select as SelectAnt,
  Input as InputAnt,
  Row as RowAnt,
} from 'antd'

const { Option: OptionAnt } = SelectAnt

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`

export const QueryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 40%;
  width: fit-content;
  height: 20%;
  padding: 5%;
  margin: 15px 0;

  background: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`

export const QueryExempleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #00000017;
  border-radius: 5px;
  min-width: 70%;
  width: fit-content;
  height: 10%;
  margin: 15px 0;

  background: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`

export const QueryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  word-break: break-all;
  width: 30%;
`

export const RawContainer = styled.div`
  display: inline-block;

  width: 80%;
  height: 60%;
  overflow-y: scroll;

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
  height: 10%;
`

export const Form = styled(FormAnt)`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 50px;
`

export const Select = styled(SelectAnt)`
  width: 250px !important;
  margin: 0px 10px;
`

export const Option = styled(OptionAnt)``

export const Input = styled(InputAnt)`
  width: 150px;
`

export const Button = styled(ButtonAnt)`
  margin-right: 5%;
`

export const SwapIcon = styled(AiOutlineSwap)`
  width: 20px;
  height: 20px;
  color: #1890ff;
  cursor: pointer;
`

export const RemoveIcon = styled(IoIosRemoveCircleOutline)`
  width: 20px;
  height: 20px;
  color: #ff1818;
  cursor: pointer;
  margin: 0px 10px;
`

export const Row = styled(RowAnt)`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 3px 0px;

  &:nth-child(odd) {
    background-color: #f6f4f4;
  }
  &:nth-child(even) {
    background-color: #cccccc69;
  }
`
