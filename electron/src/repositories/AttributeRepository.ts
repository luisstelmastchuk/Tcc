import { Repository, getRepository, DeepPartial } from 'typeorm'
import { Attribute } from '../models/entities'

class AttributeRepository {
  private ormRepository: Repository<Attribute>

  constructor() {
    this.ormRepository = getRepository(Attribute)
  }

  async create(payload: DeepPartial<Attribute>[]) {
    const attribute = await this.ormRepository.create(payload)
    await this.ormRepository.save(attribute)
    return attribute
  }
}

export default new AttributeRepository()
