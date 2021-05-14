import styled, { css } from 'styled-components'
import { Tabs as TabsAnt } from 'antd'

const { TabPane: TabPaneAnt } = TabsAnt

interface IContainer {
  imageUrl: any
}
export const Container = styled.div<IContainer>`
  width: 100vw;
  height: 100vh;
  ${({ imageUrl }) =>
    css`
      background: url(${imageUrl});
    `}
`

export const Tabs = styled(TabsAnt)`
  height: 100%;
  .ant-tabs-nav-wrap {
    background: white;
  }
  .ant-tabs-content {
    height: 100%;
  }
`

export const TabPane = styled(TabPaneAnt)``
