import User from '../models/entities/User'
import { CreateUserDTO } from '../models/DTOs/User/CreateUserDTO'
import UserRepository from '../repositories/UserRepository'

class UserService {
  async create(payload: CreateUserDTO): Promise<User> {
    const user = await UserRepository.create(payload)
    return user
  }

  async findAll(): Promise<User[]> {
    return await UserRepository.findAll()
  }
}

export default new UserService()
