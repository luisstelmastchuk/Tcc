import React, { useState } from 'react'
import { ipcRenderer } from 'electron'

import { Table as TableModel } from '../../../shared/models/Table'
import { Attribute as AttributeModel } from '../../../shared/models/Attribute'
import { sleep } from '../../../shared/utils/sleep'

import { message, Tooltip } from 'antd'

import {
  QueryContainer,
  RawContainer,
  ActionContainer,
  Form,
  Select,
  Option,
  Button,
  Input,
  QueryExempleContainer,
  SwapIcon,
  RemoveIcon,
  Row,
  QueryWrapper,
} from './styles'

interface IProps {
  tables: TableModel[]
}

const InsertionContainer: React.FC<IProps> = ({ tables }) => {
  const [table, setTable] = useState<TableModel | null>(null)
  const [swapping, setSwapping] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [attributes, setAttributes] = useState<AttributeModel[]>()
  const [valueToInsert, setValueToInsert] = useState<string | null>(null)
  const [queries, setQueries] = useState<string[]>([])
  const [form] = Form.useForm()

  const handleFileChosen = (file: File): void => {
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
      const content = fileReader.result.toString().split('\n')
      const invalidLines: number[] = []
      content.forEach((value, index) => {
        const valueColumns = value.split(',')
        if (valueColumns.length !== attributes.length) {
          invalidLines.push(index + 1)
        }
      })
      if (invalidLines.length) {
        message.error(
          `O registro nas linhas (${invalidLines.join(', ')}) estão inválidos`
        )
      } else {
        content.forEach((value) => {
          const query = `INSERT INTO ${table.name}(${attributes
            .map((attribute) => attribute.name)
            .join(', ')}) VALUES (${value
            .split(',')
            .map((value) => Number.parseFloat(value) || `'${value}'`)
            .join(',')})`.replace(/(\r\n|\n|\r)/gm, '')

          setQueries((oldValues) => [...oldValues, query])
        })
        message.success('Registros carregados com sucesso')
      }
    }
    fileReader.readAsText(file)
  }

  const handleSelectTable = (tableName: string): void => {
    const table = tables.find((table) => table.name === tableName)
    setAttributes([
      ...table.attributes
        .filter((attribute) => attribute.name !== table.primaryKey)
        .map((attribute) => ({
          name: attribute.name,
          type: attribute.type,
        })),
    ])
    setValueToInsert(null)
    setTable(table)
  }

  const handleFormChange = ({ target: { name, value } }): void => {
    const values = form.getFieldsValue()
    values[name] = value
    const formatedValues = attributes
      .map((attribute) => values[attribute.name])
      .join(', ')
    setValueToInsert(formatedValues)
  }

  const handleAddQuery = (): void => {
    const values = form.getFieldsValue()

    const emptyAttributes = attributes.filter(
      (attribute) => !values[attribute.name]
    )

    if (emptyAttributes.length) {
      message.warning(
        `Preencha os campos ${emptyAttributes
          .map((attribute) => attribute.name)
          .join(', ')} corretamente`
      )
      return
    }

    const query = `INSERT INTO ${table.name}(${attributes
      .map((attribute) => attribute.name)
      .join(', ')}) VALUES (${valueToInsert || '...'})`

    setQueries((oldValues) => [...oldValues, query])
    setValueToInsert(null)
    form.resetFields()
  }

  const handleSwapAttribute = async (attributeName: string): Promise<void> => {
    setSwapping(true)
    const index = attributes.findIndex(
      (attribute) => attribute.name === attributeName
    )
    const indexToChange = index + 1

    const selectedAttribute = {
      name: attributes[index].name,
      type: attributes[index].type,
    }
    const attributeToChange = {
      name: attributes[indexToChange].name,
      type: attributes[indexToChange].type,
    }
    const newSequenceOfAttributes = attributes
    newSequenceOfAttributes[indexToChange] = selectedAttribute
    newSequenceOfAttributes[index] = attributeToChange
    setAttributes(newSequenceOfAttributes)
    await sleep(10)
    setSwapping(false)
  }

  const handleExecuteQuery = (): void => {
    if (!queries.length) {
      message.warning('Informe ao menos uma query para executar')
      return
    }
    setLoading(true)
    ipcRenderer.send('table:insert', queries)
    ipcRenderer.once('table:insert:response', async (event, error) => {
      await sleep(1000)
      if (error) {
        message.error(error)
      } else {
        message.success('Instruções executadas com sucesso')
      }
      setLoading(false)
    })
  }

  const handleRemoveQuery = (queryToRemove: string): void => {
    setQueries([...queries.filter((query) => query !== queryToRemove)])
  }

  return (
    <>
      <QueryContainer>
        <Form>
          <Form.Item label="Tabela">
            <Select
              onChange={(tableName) => handleSelectTable(tableName.toString())}
            >
              {tables.map((table) => (
                <Option key={table.name}>{table.name}</Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
        <Form form={form} layout="inline">
          {table && !swapping && (
            <>
              {attributes.map((attribute, index) => (
                <React.Fragment key={attribute.name}>
                  <Form.Item label={attribute.name} name={attribute.name}>
                    <Input
                      name={attribute.name}
                      type={attribute.type === 'integer' ? 'number' : 'text'}
                      placeholder={attribute.name}
                      onChange={handleFormChange}
                    />
                  </Form.Item>
                  {index < attributes.length - 1 && (
                    <Form.Item>
                      <SwapIcon
                        onClick={() => handleSwapAttribute(attribute.name)}
                      />
                    </Form.Item>
                  )}
                </React.Fragment>
              ))}
            </>
          )}
        </Form>
        {table && (
          <Form>
            <Form.Item label="Carregar Arquivo">
              <Tooltip
                placement="top"
                title={`Os registros devem estar separados com uma quebra de linha e estar no formato '${attributes
                  .map((attribute) => attribute.name)
                  .join(
                    ', '
                  )}'. Os atributos poderão ser reordenados clicando no icone azul entre os campos.`}
              >
                <input
                  type="file"
                  accept=".txt"
                  onChange={({ target: { files } }) =>
                    handleFileChosen(files[0])
                  }
                />
              </Tooltip>
            </Form.Item>
          </Form>
        )}
      </QueryContainer>
      {table && !swapping && (
        <QueryExempleContainer>
          {`INSERT INTO ${table.name}(${attributes
            .map((attribute) => attribute.name)
            .join(', ')}) VALUES (${valueToInsert || '...'})`}
          <Button
            type="primary"
            style={{ margin: '0 10px' }}
            onClick={() => handleAddQuery()}
          >
            Add
          </Button>
        </QueryExempleContainer>
      )}
      <RawContainer>
        {queries.map((query) => (
          <Row key={Math.random()} style={{ margin: '10px 0px' }}>
            <QueryWrapper>{query};</QueryWrapper>
            <RemoveIcon onClick={() => handleRemoveQuery(query)} />
          </Row>
        ))}
      </RawContainer>
      <ActionContainer>
        <Button
          type="primary"
          onClick={() => handleExecuteQuery()}
          loading={loading}
        >
          Executar
        </Button>
      </ActionContainer>
    </>
  )
}

export default InsertionContainer
