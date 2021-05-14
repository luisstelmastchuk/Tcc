import { ipcMain } from 'electron'
import { getConnection } from 'typeorm'

import TableService from '../services/TableService'
import AttributeService from '../services/AttributeService'

import { createTableQueryBuilder } from '../builders/CreateTableQueryBuilder'

const connection = getConnection()

ipcMain.on('table:create', async (event, table) => {
  try {
    const { id } = await TableService.create({
      name: table.name,
      primaryKey: table.primaryKey,
    })
    const attributes = table.attributes.map((attribute) => ({
      ...attribute,
      table_id: id,
    }))
    await AttributeService.create(attributes)
    const response = await TableService.findAll()
    await connection.query(createTableQueryBuilder(table))
    event.reply('table:create:response', response)
  } catch (err) {
    console.error(err)
    event.reply('table:create:response', [])
  }
})

ipcMain.on('table:getAll', async (event) => {
  try {
    const response = await TableService.findAll()
    event.reply('table:getAll:response', response)
  } catch (err) {
    console.error(err)
    event.reply('table:getAll:response', [])
  }
})

ipcMain.on('table:insert', async (event, queries) => {
  try {
    await Promise.all(
      queries.map(async (query) => {
        await connection.query(query)
      })
    )
    event.reply('table:insert:response', null)
  } catch (err) {
    console.error(err)
    event.reply('table:insert:response', err)
  }
})

ipcMain.on('table:query', async (event, request) => {
  try {
    const queries: {
      query: string
      condition: string
      result?: any
    }[] = request
    await Promise.all(
      queries.map(async (query, index) => {
        queries[index].result = await connection.query(query.query)
      })
    )
    event.reply('table:query:response', { queries })
  } catch (err) {
    console.error(err)
    event.reply('table:query:response', { err })
  }
})
