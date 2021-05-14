import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'

import { Container, EmptyWrapper, Empty } from './styles'

interface Request {
  query: string
  condition: string
  result?: any
}

interface IProps {
  request: Request
}

const Table: React.FC<IProps> = ({ request }) => {
  const [payload, setPayload] = useState<Request | null>()

  useEffect(() => {
    setPayload(request)
  }, [request])

  return (
    <>
      {payload && payload.result[0] ? (
        <Container
          tableLayout="auto"
          columns={Object.getOwnPropertyNames(payload.result[0]).map(
            (columnName) => ({
              title: columnName,
              dataIndex: columnName,
              key: columnName,
            })
          )}
          dataSource={payload.result.map((data) => ({
            ...data,
            key: v4(),
          }))}
        />
      ) : (
        <EmptyWrapper>
          <Empty description="Nenhum dado localizado" />
        </EmptyWrapper>
      )}
    </>
  )
}

export default Table
