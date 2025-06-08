import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Post } from './entities/post.entity'
import { User } from '@modules/user/entities/user.entity'
import { PostService } from './services/post.service'
import { UserService } from '@modules/user/services/user.service'
import { PostController } from './controllers/post.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Post, User])],
  providers: [PostService, UserService],
  controllers: [PostController],
  exports: [PostService],
})
export class PostModule {}
