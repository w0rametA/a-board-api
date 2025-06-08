import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../entities/user.entity'

import * as bcrypt from 'bcryptjs'

import { FindOneOptions, Repository } from 'typeorm'
import { IUSerCreate } from '../interfaces/user.interface'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(payload: IUSerCreate): Promise<Omit<User, 'password'>> {
    const { email, name, password } = payload

    const hashedPassword = bcrypt.hashSync(password)

    const newUser = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    })

    await this.userRepository.save(newUser)

    return newUser
  }

  async findByEmail(email: string, relations: string[] = []): Promise<User> {
    const condition: FindOneOptions<User> = {
      where: {
        email,
      },
      select: ['id', 'password', 'email', 'name'],
      relations,
    }
    return await this.userRepository.findOne(condition)
  }
}
