import styled, { css } from 'styled-components'
import {
  Input as InputAnt,
  Row as RowAnt,
  Button as ButtonAnt,
  Select as SelectAnt,
} from 'antd'

const { Option: OptionAnt } = SelectAnt

export const Input = styled(InputAnt)`
  width: 120px;
  margin: 0px 10px;
`

export const Row = styled(RowAnt)`
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

export const Button = styled(ButtonAnt)``

export const Option = styled(OptionAnt)``

export const Select = styled(SelectAnt)`
  width: 120px;
  margin: 0px 10px;
`

export const TableCreatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50%;
`

export const TableCreatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  width: 25%;
  height: 50%;

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

export const TableCreatorReview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 40%;
  padding: 15px;
`

export const TableAttributesContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  padding-left: 15%;
  margin-bottom: 5px;
`

export const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
`

export const Value = styled.span`
  display: flex;
  align-items: flex-end;

  font-size: 14px;
  margin: 0px 10px;
`

interface IAttributeWrapper {
  justifyContent: 'flex-start' | 'flex-end'
}
export const AttributeWrapper = styled.div<IAttributeWrapper>`
  display: flex;
  align-items: center;
  ${({ justifyContent }) =>
    css`
      justify-content: ${justifyContent};
    `}

  width: 100px;
`

export const AttributeName = styled.span`
  display: flex;
  align-items: flex-end;

  font-size: 14px;
  margin-right: 30px;
`

export const AttributeType = styled.span`
  display: flex;
  align-items: flex-end;

  font-size: 14px;
`
