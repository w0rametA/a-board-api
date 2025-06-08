import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { PostService } from '../services/post.service'
import { AuthGuard } from 'src/middleware/guards/auth.guard'

import { UserService } from '@modules/user/services/user.service'
import { CreatePostDTO } from '../dtos/post.dto'

@ApiBearerAuth()
@ApiTags('Post')
@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService,
  ) {}

  @ApiOperation({ summary: 'Create Post' })
  @Post()
  @UseGuards(AuthGuard)
  async createPost(@Body() body: CreatePostDTO) {
    try {
      return await this.postService.createPost(body)
    } catch (error) {
      console.error('error createPost', error)
      throw error
    }
  }
}
