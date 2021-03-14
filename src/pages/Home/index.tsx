import React, { useState, useEffect } from 'react'
import { ipcRenderer } from 'electron'

import { User } from '../../models/User'

import { message, Form, Input, Button } from 'antd'
import { Container, UserForm, UserList } from './styles'

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  const [form] = Form.useForm()

  useEffect(() => {
    ipcRenderer.send('user:findAll')
    ipcRenderer.once('user:findAll:response', (event, users) => {
      setUsers(users)
    })
  }, [])

  const createUserHandler = async () => {
    try {
      await form.validateFields()
      const payload = form.getFieldsValue()
      ipcRenderer.send('user:create', payload)
      ipcRenderer.once('user:create:response', (event, newUser) => {
        setUsers([...users, newUser])
      })
    } catch ({ errorFields }) {
      errorFields.forEach(({ errors }) => {
        errors.forEach((error) => {
          message.warning(error)
        })
      })
    }
  }
  return (
    <Container>
      <UserForm>
        <Form form={form}>
          <Form.Item
            rules={[{ message: 'Nome obrigatório', required: true }]}
            name="name"
          >
            <Input placeholder="Nome" type="text" name="name" />
          </Form.Item>
          <Button onClick={() => createUserHandler()}>Salvar</Button>
        </Form>
      </UserForm>
      <UserList>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </UserList>
    </Container>
  )
}

export default Home
