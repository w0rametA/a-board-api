import { ApiProperty, ApiPropertyOptional, OmitType } from '@nestjs/swagger'
import { IPost } from '../interfaces/post.interface'
import { UserDTO } from '@modules/user/dtos/user.dto'

export class PostDTO implements Omit<IPost, 'user'> {
  @ApiProperty({ description: 'Idenifier post' })
  id: number

  @ApiPropertyOptional({ description: 'Post title' })
  title?: string

  @ApiProperty({ description: 'Post content' })
  content: string

  @ApiProperty({ description: 'Post type' })
  type: string

  @ApiProperty({ description: 'User ID who created the post' })
  userId: number

  @ApiPropertyOptional({ description: 'Parent post ID for comments/replies' })
  parentId?: number

  @ApiPropertyOptional({ description: 'Comments of this post' })
  comments?: PostDTO[]

  @ApiPropertyOptional({ description: 'Owner of this post/comment' })
  user: UserDTO
}

export class CreatePostDTO extends OmitType(PostDTO, ['id']) {}

// DTO for updating a post
export class UpdatePostDto extends CreatePostDTO {}
