import { User } from '@modules/user/entities/user.entity'
import { UserService } from '@modules/user/services/user.service'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import * as bcrypt from 'bcryptjs'
import { AuthResponseDTO } from '../dtos/auth.dto'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.userService.findByEmail(email)
    if (user && bcrypt.compareSync(password, user.password)) {
      const { password: _, ...result } = user
      return result
    }
    return null
  }

  async login(user: Omit<User, 'password'>): Promise<AuthResponseDTO> {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
    }

    const token = this.jwtService.sign(payload)

    return {
      user: payload,
      token,
    }
  }
}
