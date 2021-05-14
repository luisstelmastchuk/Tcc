import React, { Dispatch, SetStateAction, useState } from 'react'
import { ipcRenderer } from 'electron'

import { Table as TableModel } from '../../../shared/models/Table'

import { message } from 'antd'

import {
  TableCreatorContainer,
  TableCreatorReview,
  Row,
  Input,
  Button,
  TableCreatorWrapper,
  Title,
  Select,
  Option,
  Value,
  TableAttributesContainer,
  AttributeName,
  AttributeType,
  AttributeWrapper,
  ActionContainer,
} from './styles'

interface IProps {
  tables: TableModel[]
  setTables: Dispatch<SetStateAction<TableModel[]>>
}

const CreateContainer: React.FC<IProps> = ({ tables, setTables }) => {
  const [attributeType, setAttributeType] = useState<string>('integer')
  const [attribute, setAttribute] = useState<string | null>(null)
  const [table, setTable] = useState<TableModel | null>(null)

  const handleAddTable = (): void => {
    if (!table?.name) {
      message.warning('Informe o nome da tabela')
      return
    }
    if (!table?.attributes?.length) {
      message.warning('Informe os atributos da tabela')
      return
    }
    if (!table?.primaryKey) {
      message.warning('Informe a chave primaria da tabela')
      return
    }
    if (tables.some((registredTable) => registredTable.name === table?.name)) {
      message.warning(`Tabela com nome '${table?.name}' já cadastrada`)
      return
    }

    ipcRenderer.send('table:create', table)
    ipcRenderer.once('table:create:response', (event, response) => {
      setTables(response)
    })
  }

  const handleRemoveAttributes = (attribute: string): void => {
    const attributes =
      table?.attributes?.filter(
        (currentAttribute) => currentAttribute.name !== attribute
      ) || []

    setTable((oldValues) => ({ ...oldValues, attributes }))
    message.success('Atributo removido com sucesso')
  }

  const handleAddAttributes = (): void => {
    if (!attribute) {
      message.warning('Preencha um nome válido para o atributo')
      return
    }

    const attributes =
      table?.attributes?.filter(
        (currentAttribute) => currentAttribute.name !== attribute
      ) || []

    attributes.push({
      name: attribute,
      type: attributeType,
    })

    setTable((oldValues) => ({ ...oldValues, attributes }))
    setAttribute(null)

    message.success('Atributo adicionado com sucesso')
  }

  const atributesTypes = ['integer', 'boolean', 'varchar(50)', 'char(50)']
  return (
    <>
      <TableCreatorContainer>
        <TableCreatorWrapper>
          <Row>
            <Title> Tabela </Title>
            <Input
              onChange={({ target: { value } }) =>
                setTable((oldValues) => ({
                  ...oldValues,
                  name: value.toLowerCase(),
                }))
              }
            />
          </Row>
          <Row>
            <Title> Atributo </Title>
            <Input
              value={attribute}
              onChange={({ target: { value } }) =>
                setAttribute(value.toLowerCase())
              }
            />
            <Title>Tipo</Title>
            <Select
              defaultValue={attributeType}
              onChange={(selectedAttribute) =>
                setAttributeType(selectedAttribute.toString())
              }
            >
              {atributesTypes.map((type) => (
                <Option key={type}>{type}</Option>
              ))}
            </Select>
            <Button type="primary" onClick={() => handleAddAttributes()}>
              Add
            </Button>
          </Row>
        </TableCreatorWrapper>
      </TableCreatorContainer>
      <TableCreatorReview>
        {table?.name && table?.attributes?.length ? (
          <TableCreatorWrapper style={{ alignItems: 'center' }}>
            <Row>
              <Title> CREATE TABLE </Title>
              <Value>{table?.name} (</Value>
            </Row>
            <Row
              style={{
                width: '100%',
                maxHeight: '200px',
                overflowY: 'scroll',
              }}
            >
              {table && table.attributes?.length ? (
                table.attributes.map((attribute) => (
                  <TableAttributesContainer key={attribute.name}>
                    <Row>
                      <AttributeWrapper justifyContent="flex-end">
                        <AttributeName>{attribute.name}</AttributeName>
                      </AttributeWrapper>
                      <AttributeWrapper justifyContent="flex-start">
                        <AttributeType>{attribute.type},</AttributeType>
                      </AttributeWrapper>
                      <AttributeWrapper justifyContent="flex-start">
                        <Button
                          shape="circle"
                          danger
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: '25px',
                            height: '25px',
                            fontSize: '10px',
                            marginLeft: '10px',
                          }}
                          onClick={() => handleRemoveAttributes(attribute.name)}
                        >
                          X
                        </Button>
                      </AttributeWrapper>
                    </Row>
                  </TableAttributesContainer>
                ))
              ) : (
                <></>
              )}
            </Row>
            <Row>
              {table && table.attributes?.length ? (
                <>
                  <Title> PRIMARY KEY </Title>
                  <Select
                    onChange={(selectedAttribute) =>
                      setTable((oldValues) => ({
                        ...oldValues,
                        primaryKey: selectedAttribute.toString(),
                      }))
                    }
                  >
                    {table.attributes.map((attribute) => (
                      <Option key={attribute.name}>{attribute.name}</Option>
                    ))}
                  </Select>
                  );
                </>
              ) : (
                <></>
              )}
            </Row>
          </TableCreatorWrapper>
        ) : (
          <></>
        )}
      </TableCreatorReview>
      <ActionContainer>
        <Button
          type="primary"
          onClick={() => handleAddTable()}
          style={{ marginRight: '5%' }}
        >
          Executar
        </Button>
      </ActionContainer>
    </>
  )
}

export default CreateContainer
