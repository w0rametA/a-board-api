import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Post } from '../entities/post.entity'
import { FindManyOptions, Repository } from 'typeorm'
import { IPostCreate, IPostUpdate } from '../interfaces/post.interface'
import { IPaginateQuery } from '@common/interfaces/common.interface'

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async createPost(payload: IPostCreate): Promise<Post> {
    return this.postRepository.save(payload)
  }

  async findById(id: number, relations: string[] = []): Promise<Post> {
    return this.postRepository.findOne({
      where: {
        id,
      },
      relations,
    })
  }

  async findByUserId(
    userId: number,
    relations: string[] = [],
  ): Promise<Post[]> {
    return this.postRepository.find({
      where: {
        userId,
      },
      relations,
    })
  }

  async findPaginate(
    { limit, page }: IPaginateQuery,
    relations: string[] = [],
  ) {
    const options: FindManyOptions<Post> = {
      take: limit,
      skip: (page - 1) * limit,
      relations: relations,
    }
    return await this.postRepository.findAndCount(options)
  }

  async updatePost(id: number, body: IPostUpdate) {
    const post = await this.findById(id)
    const { comments, ...postData } = body
    this.postRepository.merge(post, postData)

    return await this.postRepository.save(post)
  }

  async delete(id: number) {
    const post = await this.findById(id, ['post'])
    return await this.postRepository.softRemove(post)
  }
}
