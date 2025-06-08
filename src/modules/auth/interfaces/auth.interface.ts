import { IUser } from '@modules/user/interfaces/user.interface'

export interface IAuthUser extends Omit<IUser, 'password'> {}
