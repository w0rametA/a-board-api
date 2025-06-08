import { IBaseEntity } from '@common/interfaces/common.interface'
import { IPost } from '@modules/post/interfaces/post.interface'

export interface IUser extends IBaseEntity {
  id: number
  name: string
  email: string
  password: string
  posts?: IPost[]
}

export interface IUSerCreate extends Omit<IUser, 'id'> {}
