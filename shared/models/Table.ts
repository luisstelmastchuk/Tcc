import { Attribute } from './Attribute'

export interface Table {
  name?: string
  attributes?: Attribute[]
  primaryKey?: string
}
