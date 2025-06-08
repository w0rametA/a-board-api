import { BaseEntity } from '@common/entities/base.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { IUser } from '../interfaces/user.interface'
import { Post } from '@modules/post/entities/post.entity'
import { IPost } from '@modules/post/interfaces/post.interface'

@Entity()
export class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column({
    select: false,
  })
  password: string

  @OneToMany(() => Post, (post) => post.user)
  posts?: IPost[]
}
