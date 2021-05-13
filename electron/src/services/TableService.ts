import { DeepPartial } from 'typeorm'
import { Table } from '../models/entities'
import TableRepository from '../repositories/TableRepository'

class TableService {
  async create(payload: DeepPartial<Table>): Promise<Table> {
    const table = await TableRepository.create(payload)
    return table
  }

  async findAll(): Promise<Table[]> {
    return await TableRepository.findAll()
  }

  async findById(id: string): Promise<Table> {
    return await TableRepository.findById(id)
  }
}

export default new TableService()
