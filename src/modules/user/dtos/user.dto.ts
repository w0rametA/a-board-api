import { ApiProperty } from '@nestjs/swagger'
import { IUser, IUSerCreate } from '../interfaces/user.interface'

export class UserDTO implements Omit<IUser, 'password'> {
  @ApiProperty({
    description: 'User Id',
    example: 1,
  })
  id: number

  @ApiProperty({
    description: 'name',
    example: 'John',
  })
  name: string

  @ApiProperty({
    description: 'email',
    example: 'user@email.com',
  })
  email: string
}

export class UserCreateDTO implements IUSerCreate {
  @ApiProperty({
    description: 'name',
    example: 'John',
  })
  name: string
  @ApiProperty({
    description: 'email',
    example: 'user@email.com',
  })
  email: string
  @ApiProperty({
    description: 'password',
    example: 'myP@s$worD',
  })
  password: string
}
