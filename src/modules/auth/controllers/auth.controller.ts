import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { LoginDTO } from '../dtos/auth.dto'
import { AuthService } from '../services/auth.service'

@ApiBearerAuth()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Login' })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: LoginDTO) {
    try {
      const { email, password } = body

      const user = await this.authService.validateUser(email, password)
      if (!user) {
        throw new BadRequestException('Invalid credential')
      }

      return this.authService.login(user)
    } catch (error) {
      console.error('error Login', error)
      throw error
    }
  }
}
