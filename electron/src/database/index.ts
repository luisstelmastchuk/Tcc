import { createConnection } from 'typeorm'

import { Table, Attribute } from '../models/entities'
import { CreateTable1620846720149 } from './migrations/1620846720149-CreateTable'
import { CreateAttributes1620846758852 } from './migrations/1620846758852-CreateAttributes'

export const initializeDatabase = async (): Promise<void> => {
  await createConnection({
    name: 'default',
    type: 'sqlite',
    database: 'resources/db.sqlite',
    entities: [Table, Attribute],
    migrations: [CreateTable1620846720149, CreateAttributes1620846758852],
    migrationsRun: true,
  })
    .then(() => console.log('Database Up'))
    .catch((error) => console.error(error))
}
