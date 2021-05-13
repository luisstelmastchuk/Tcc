import { DeepPartial } from 'typeorm'
import { Attribute } from '../models/entities'
import AttributeRepository from '../repositories/AttributeRepository'

class AttributeService {
  async create(payload: DeepPartial<Attribute>[]): Promise<Attribute[]> {
    const attributes = await AttributeRepository.create(payload)
    return attributes
  }
}

export default new AttributeService()
