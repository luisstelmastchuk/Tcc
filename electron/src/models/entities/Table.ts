import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm'

import Attribute from './Attribute'

@Entity({ name: 'tables' })
class Table {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  primaryKey: string

  @OneToMany(() => Attribute, (attribute) => attribute.table, { eager: true })
  attributes: Attribute[]

  @CreateDateColumn()
  created_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}

export default Table
