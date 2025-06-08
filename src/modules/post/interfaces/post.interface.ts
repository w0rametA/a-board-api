import { IUser } from '@modules/user/interfaces/user.interface'

export interface IPost {
  id: number
  title?: string
  content: string
  type: string
  userId: number
  parentId?: number
  comments?: IPost[]
  user: Omit<IUser, 'password'>
  post?: IPost
}

export interface IPostCreate extends Omit<IPost, 'id'> {}

export type IPostUpdate = IPostCreate
