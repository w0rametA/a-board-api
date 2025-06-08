import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserService } from '../services/user.service'
import { UserCreateDTO } from '../dtos/user.dto'

@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Create new User' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() body: UserCreateDTO) {
    try {
      const { email, name, password } = body
      const existingUser = await this.userService.findByEmail(email)

      if (existingUser) {
        throw new BadRequestException('Duplicate Email')
      }

      const newUser = await this.userService.createUser({
        name,
        password,
        email,
      })

      return newUser
    } catch (error) {
      console.error('erro createUser ', error)
      throw error
    }
  }
}
