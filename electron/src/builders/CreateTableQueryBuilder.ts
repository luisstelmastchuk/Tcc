import { Table } from '../../../shared/models/Table'

export const createTableQueryBuilder = (table: Table): string => {
  const primaryKeyIndex = table.attributes.findIndex(
    (attribute) => attribute.name === table.primaryKey
  )

  table.attributes[primaryKeyIndex].type = 'INTEGER PRIMARY KEY AUTOINCREMENT'

  const attributes = table.attributes
    .map((attribute) => `${attribute.name} ${attribute.type}`)
    .join(', ')

  return `CREATE TABLE ${table.name} (${attributes})`
}
