import React, { useState, useEffect } from 'react'
import { ipcRenderer } from 'electron'

import { Table as TableModel } from '../../../shared/models/Table'

import CreateContainer from '../../containers/CreateContainer'
import InsertContainer from '../../containers/InsertContainer'
import SelectionContainer from '../../containers/SelectContainer'

import { Container, Tabs, TabPane } from './styles'

import BackgroundImage from '../../assets/background.jpg'

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
    <Container imageUrl={BackgroundImage}>
      <Tabs onChange={handleTabChange} activeKey={activeTab}>
        <TabPane tab="Tabelas" key="1">
          <CreateContainer tables={tables} setTables={setTables} />
        </TabPane>
        <TabPane tab="Inserções" key="2">
          <InsertContainer tables={tables} />
        </TabPane>
        <TabPane tab="Seleções" key="3">
          <SelectionContainer tables={tables} />
        </TabPane>
      </Tabs>
    </Container>
  )
}

export default Home
