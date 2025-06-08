import { UserCreateDTO, UserDTO } from '@modules/user/dtos/user.dto'
import { ApiProperty, PickType } from '@nestjs/swagger'

export class AuthUserDTO extends PickType(UserDTO, ['id', 'name', 'email']) {}

export class AuthResponseDTO {
  @ApiProperty({
    description: 'Authentication token',
    example: 'eyjHasOfauz,ww39rsadCS#s...',
  })
  token: string

  @ApiProperty({
    description: 'User Information',
    type: AuthUserDTO,
  })
  user: AuthUserDTO
}

export class LoginDTO extends PickType(UserCreateDTO, ['email', 'password']) {}
