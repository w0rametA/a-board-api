import { IBaseEntity } from '@common/interfaces/common.interface'
import { ApiProperty } from '@nestjs/swagger'

export class BaseEntityDTO implements IBaseEntity {
  @ApiProperty({
    description: 'Date when the entity was created',
    example: '2025-02-03T17:00:00:000Z',
    type: String,
    required: false,
  })
  createdAt?: string

  @ApiProperty({
    description: 'Date when the entity was updated',
    example: '2025-02-03T17:00:00:000Z',
    type: String,
    required: false,
  })
  updatedAt?: string

  @ApiProperty({
    description: 'Date when the entity was deleted',
    example: '2025-02-03T17:00:00:000Z',
    type: String,
    required: false,
  })
  deletedAt?: string
}

export class DataResponseDTO<T> {
  @ApiProperty({
    description: 'List of data',
    example: [],
    type: [Object],
  })
  data: T[]
}
