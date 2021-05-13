import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  DeleteDateColumn,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm'

import Table from './Table'

@Entity({ name: 'attributes' })
class Attribute {
  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column()
  name: string

  @Column()
  type: string

  @Column()
  table_id: string

  @ManyToOne(() => Table)
  @JoinColumn({ name: 'table_id' })
  table: Table

  @CreateDateColumn()
  created_at: Date

  @DeleteDateColumn()
  deleted_at: Date
}

export default Attribute
