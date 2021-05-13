import styled, { css } from 'styled-components'
import { Tabs as TabsAnt } from 'antd'

const { TabPane: TabPaneAnt } = TabsAnt

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Tabs = styled(TabsAnt)`
  height: 100%;
  .ant-tabs-content {
    height: 100%;
  }
`

export const TabPane = styled(TabPaneAnt)``
