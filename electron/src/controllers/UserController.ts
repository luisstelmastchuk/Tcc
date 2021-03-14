import { ipcMain } from 'electron'
import UserService from '../services/UserService'

ipcMain.on('user:create', async (event, user) => {
  try {
    const response = await UserService.create(user)
    event.reply('user:create:response', response)
  } catch (err) {
    console.error(err)
    event.reply('user:create:response', false)
  }
})

ipcMain.on('user:findAll', async (event) => {
  try {
    const response = await UserService.findAll()
    event.reply('user:findAll:response', response)
  } catch (err) {
    console.error(err)
    event.reply('user:findAll:response', [])
  }
})
