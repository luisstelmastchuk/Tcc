import React, { useState, useEffect } from 'react'
import { ipcRenderer } from 'electron'

import { Table as TableModel } from '../../../shared/models/Table'

import CreateContainer from '../../containers/CreateContainer'
import InsertionContainer from '../../containers/InsertionContainer'

import { Container, Tabs, TabPane } from './styles'

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('1')
  const [tables, setTables] = useState<TableModel[]>([])

  useEffect(() => {
    ipcRenderer.send('table:getAll')
    ipcRenderer.once('table:getAll:response', (event, response) => {
      setTables(response)
    })
  }, [])

  const handleTabChange = (selectedTab: string): void => {
    setActiveTab(selectedTab)
  }

  return (
    <Container>
      <Tabs onChange={handleTabChange} activeKey={activeTab}>
        <TabPane tab="Tabelas" key="1">
          <CreateContainer tables={tables} setTables={setTables} />
        </TabPane>
        <TabPane tab="Inserções" key="2">
          <InsertionContainer tables={tables} />
        </TabPane>
        <TabPane tab="Resultado" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </Container>
  )
}

export default Home
