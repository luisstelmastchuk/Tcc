import { Repository, getRepository, DeepPartial } from 'typeorm'
import { Table } from '../models/entities'

class TableRepository {
  private ormRepository: Repository<Table>

  constructor() {
    this.ormRepository = getRepository(Table)
  }

  async create(payload: DeepPartial<Table>) {
    const table = await this.ormRepository.create({ ...payload })
    await this.ormRepository.save(table)
    return table
  }

  async findAll(): Promise<Table[]> {
    return await this.ormRepository.find({ loadEagerRelations: true })
  }

  async findById(id: string): Promise<Table> {
    return await this.ormRepository.findOne({ where: { id } })
  }
}

export default new TableRepository()
