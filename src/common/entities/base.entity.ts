import { IBaseEntity } from '@common/interfaces/common.interface'
import { CreateDateColumn } from 'typeorm'

export class BaseEntity implements IBaseEntity {
  @CreateDateColumn({
    type: 'timestamptz',
  })
  createdAt?: string

  @CreateDateColumn({
    type: 'timestamptz',
  })
  updatedAt?: string

  @CreateDateColumn({
    type: 'timestamptz',
  })
  deletedAt?: string
}
