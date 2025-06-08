import { IBaseEntity } from '@common/interfaces/common.interface'

export interface IUser extends IBaseEntity {
  id: number
  name: string
  email: string
  password: string
}

export interface IUSerCreate extends Omit<IUser, 'id'> {}
