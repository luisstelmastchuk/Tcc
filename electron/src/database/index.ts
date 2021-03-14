import { createConnection, getConnectionOptions } from 'typeorm'
import path from 'path'

import { User } from '../models/entities'

const findDatabase = async (): Promise<string> => {
  if (process.env.NODE_ENV === 'development') {
    const baseConnectionOpts = await getConnectionOptions()
    return baseConnectionOpts.database as string
  }
  return path.join(__dirname, 'resources', 'db.sqlite')
}

export const initializeDatabase = async (): Promise<void> => {
  const database = await findDatabase()
  await createConnection({
    name: 'default',
    type: 'sqlite',
    database,
    entities: [User],
  })
    .then(() => console.log('Database Up'))
    .catch((error) => console.error(error))
}
