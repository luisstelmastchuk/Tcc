import React, { useState } from 'react'
import { ipcRenderer } from 'electron'
import { v4 } from 'uuid'
import { sleep } from '../../../shared/utils/sleep'

import Spinner from '../../components/Spinner'
import Table from '../../components/Table'

import {
  TopSideContainer,
  BottomSideContainer,
  ReviewContainer,
  QueryContainer,
  Form,
  Select,
  Option,
  Input,
  WhereLabel,
  Button,
  Row,
  Col,
  RemoveIcon,
  ActionContainer,
  ReviewWapper,
  StepsWrapper,
  TableWrapper,
  Steps,
  Step,
} from './styles'

import { Table as TableModel } from '../../../shared/models/Table'
import { Where as WhereModel } from '../../models/Where'
import { message } from 'antd'

interface IProps {
  tables: TableModel[]
}

const SelectContainer: React.FC<IProps> = ({ tables }) => {
  const [table, setTable] = useState<TableModel>(tables[0])
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [isExecuting, setIsExecuting] = useState<boolean>(false)
  const [results, setResults] = useState<
    { query: string; condition: string; result?: any }[]
  >([])
  const [fields, setFields] = useState<string[]>([])
  const [wheres, setWheres] = useState<WhereModel[]>([
    {
      id: v4(),
    },
  ])

  const handleSelectTable = (tableName: string): void => {
    setTable(tables.find((table) => table.name === tableName))
  }

  const handleSelectFields = (field: string): void => {
    const separatedFields = field.split(',')
    if (separatedFields.some((field) => field === '*')) {
      if (fields.some((field) => field === '*')) {
        setFields(separatedFields.filter((field) => field !== '*'))
      } else {
        setFields(['*'])
      }
    } else {
      setFields(separatedFields)
    }
  }

  const handleAddWhere = (id: string): void => {
    setWheres((oldValues) => [...oldValues, { id }])
  }

  const handleRemoveWhere = (id: string): void => {
    setWheres(wheres.filter((where) => where.id !== id))
  }

  const isValidWhere = (where: WhereModel): boolean => {
    let isValid = true
    if (!where.condition) {
      isValid = false
    }
    if (!where.field) {
      isValid = false
    }
    if (!where.operation) {
      isValid = false
    }

    return isValid
  }

  const handleEditWhere = async (id: string, { name, value }) => {
    setLoading(true)
    const indexToUpdate = wheres.findIndex((where) => where.id === id)
    const listOfWheres = wheres
    listOfWheres[indexToUpdate][name] = value
    await sleep(1)
    setLoading(false)
    setWheres(listOfWheres)
  }

  const handleExecuteQueries = () => {
    const queries = [
      {
        query: `SELECT * FROM ${table.name}`,
        condition: 'Obtenção da tabela',
      },
    ]

    const fieldsToSearch = fields.filter((field) => field !== '').join(', ')

    if (wheres.every((where) => !isValidWhere(where))) {
      if (fieldsToSearch && fieldsToSearch !== '*') {
        queries.push({
          query: `SELECT ${fieldsToSearch} FROM ${table.name}`,
          condition: 'Aplicando os campos solicitados',
        })
      }
    } else if (fieldsToSearch) {
      wheres.forEach((where, index) => {
        if (isValidWhere(where)) {
          if (index === 0) {
            queries.push({
              query: `SELECT * FROM ${table.name} WHERE ${where.field} ${
                where.operation
              } ${formatConditionType(where.condition)}`,
              condition: `Aplicando a condição: ${where.field} ${
                where.operation
              } ${formatConditionType(where.condition)}`,
            })
          } else {
            queries.push({
              query: `${queries[index].query} AND ${where.field} ${
                where.operation
              } ${formatConditionType(where.condition)}`,
              condition: `Aplicando a condição: ${where.field} ${
                where.operation
              } ${formatConditionType(where.condition)}`,
            })
          }
        }
      })
      if (fieldsToSearch !== '*') {
        queries.push({
          query: `SELECT ${fieldsToSearch} FROM ${
            table.name
          } WHERE ${wheres
            .map(
              (where) =>
                `${where.field} ${where.operation} ${formatConditionType(
                  where.condition
                )}`
            )
            .join(' AND ')}`,
          condition: 'Aplicando os campos solicitados',
        })
      }
    }

    if (fieldsToSearch) {
      setIsExecuting(true)
      setResults([])
      setStep(0)
      ipcRenderer.send('table:query', queries)
      ipcRenderer.once(
        'table:query:response',
        async (event, { queries, err }) => {
          await sleep(1500)
          if (err) {
            message.error(err)
          } else {
            message.success('Consultas realizadas com sucesso')
            setResults(queries)
          }
          setIsExecuting(false)
        }
      )
    } else {
      message.warning('Nenhuma consulta válida construida')
    }
  }

  const formatConditionType = (condition: string): string | number => {
    return Number.parseFloat(condition) || `'${condition}'`
  }

  const whereConditions = ['=', '!=', '>', '>=', '<', '<=']

  return (
    <>
      <TopSideContainer>
        <QueryContainer>
          <Form layout="vertical">
            <Form.Item label="Selecione em" style={{ width: '200px' }}>
              <Select
                defaultValue={tables[0].name}
                onChange={(tableName) =>
                  handleSelectTable(tableName.toString())
                }
              >
                {tables.map((table) => (
                  <Option key={table.name}>{table.name}</Option>
                ))}
              </Select>
            </Form.Item>
            {table && (
              <Form.Item label="Os campos" style={{ width: '300px' }}>
                <Select
                  value={fields.filter((field) => field !== '')}
                  mode="multiple"
                  onChange={(field) => handleSelectFields(field.toString())}
                >
                  {[
                    '*',
                    ...table.attributes.map((attribute) => attribute.name),
                  ].map((field) => (
                    <Option key={field}>{field}</Option>
                  ))}
                </Select>
              </Form.Item>
            )}
            {table && (
              <Form.Item label="Onde">
                {wheres.map((where, index) => (
                  <Row key={where.id}>
                    <Col sm={6}>
                      <WhereLabel>Campo</WhereLabel>
                      <Select
                        onChange={(value) =>
                          handleEditWhere(where.id, { name: 'field', value })
                        }
                      >
                        {table.attributes.map((attribute) => (
                          <Option key={attribute.name}>{attribute.name}</Option>
                        ))}
                      </Select>
                    </Col>
                    <Col sm={6}>
                      <WhereLabel>Operador</WhereLabel>
                      <Select
                        onChange={(value) =>
                          handleEditWhere(where.id, {
                            name: 'operation',
                            value,
                          })
                        }
                      >
                        {whereConditions.map((condition) => (
                          <Option key={condition}>{condition}</Option>
                        ))}
                      </Select>
                    </Col>
                    <Col sm={6}>
                      <Form.Item noStyle>
                        <WhereLabel>Condição</WhereLabel>
                        <Input
                          name="condição"
                          onChange={({ target: { value } }) =>
                            handleEditWhere(where.id, {
                              name: 'condition',
                              value,
                            })
                          }
                        />
                      </Form.Item>
                    </Col>
                    <Col
                      sm={6}
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-end',
                      }}
                    >
                      {index + 1 !== wheres.length ? (
                        <Button
                          type="primary"
                          danger
                          onClick={() => handleRemoveWhere(where.id)}
                        >
                          <RemoveIcon />
                        </Button>
                      ) : (
                        <>
                          <>
                            {wheres.length > 1 ? (
                              <Button
                                type="primary"
                                danger
                                onClick={() => handleRemoveWhere(where.id)}
                              >
                                <RemoveIcon />
                              </Button>
                            ) : (
                              <></>
                            )}
                          </>
                          <Button
                            type="primary"
                            onClick={() => handleAddWhere(v4())}
                          >
                            {' '}
                            Add
                          </Button>
                        </>
                      )}
                    </Col>
                  </Row>
                ))}
              </Form.Item>
            )}
          </Form>
          <ActionContainer>
            <Button
              type="primary"
              onClick={() => handleExecuteQueries()}
              loading={isExecuting}
            >
              Executar
            </Button>
          </ActionContainer>
        </QueryContainer>
        <ReviewContainer>
          {fields.length ? (
            <ReviewWapper>
              <Row>SELECT</Row>
              <Row style={{ marginLeft: '15px' }}>{fields.join(', ')}</Row>
              <Row>FROM</Row>
              <Row style={{ marginLeft: '15px' }}>{table.name}</Row>
              {
                <>
                  {wheres.some((where) => isValidWhere(where)) && (
                    <>
                      <Row>WHERE</Row>
                      <Row style={{ marginLeft: '15px' }}>
                        {wheres.map((where, index) => (
                          <React.Fragment key={where.id}>
                            {isValidWhere(where) && (
                              <>
                                {index === 0 ? (
                                  <>
                                    {`${where.field} ${
                                      where.operation
                                    } ${formatConditionType(where.condition)}`}
                                    <br />
                                  </>
                                ) : (
                                  <>
                                    AND{' '}
                                    {`${where.field} ${
                                      where.operation
                                    } ${formatConditionType(where.condition)}`}
                                    <br />
                                  </>
                                )}
                              </>
                            )}
                          </React.Fragment>
                        ))}
                      </Row>
                    </>
                  )}
                </>
              }
            </ReviewWapper>
          ) : (
            <> </>
          )}
        </ReviewContainer>
      </TopSideContainer>
      <BottomSideContainer>
        {isExecuting ? (
          <Spinner />
        ) : (
          <>
            {results.length ? (
              <>
                <StepsWrapper>
                  <Steps
                    current={step}
                    onChange={(selectedStep) => setStep(selectedStep)}
                  >
                    {results.map((result) => (
                      <Step title={result.condition} key={v4()} />
                    ))}
                  </Steps>
                </StepsWrapper>
                <TableWrapper>
                  <Table request={results[step]} />
                </TableWrapper>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </BottomSideContainer>
    </>
  )
}

export default SelectContainer
