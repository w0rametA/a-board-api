import { BaseEntity } from '@common/entities/base.entity'
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { User } from '@modules/user/entities/user.entity'
import { IPost } from '../interfaces/post.interface'
import { IUser } from '@modules/user/interfaces/user.interface'

@Entity()
export class Post extends BaseEntity implements IPost {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: true })
  title?: string

  @Column()
  content: string

  @Column()
  type: string

  @Column()
  userId: number

  @Column({ nullable: true })
  parentId?: number

  @OneToMany(() => Post, (post) => post.post)
  comments?: Post[]

  @ManyToOne(() => Post, (post) => post.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'parentId' })
  post?: Post

  @ManyToOne(() => User, (user) => user.posts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: IUser
}
