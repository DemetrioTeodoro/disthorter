import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { Post, PostDocument } from '../entities/post.entity';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(createPostDto: CreatePostDto): Promise<CreatePostDto> {
    try {
      return await new this.postModel(createPostDto).save();
    } catch (error) {
      console.error(`Erro ao salvar post: ${error.message}`);
      throw new Error('Ocorreu um erro ao salvar post.');
    }
  }

  async findAll(): Promise<CreatePostDto[]> {
    try {
      return await this.postModel.find();
    } catch (error) {
      console.error(`Erro ao buscar posts: ${error.message}`);
      throw new Error('Ocorreu um erro ao buscar posts.');
    }
  }

  async findOne(id: string): Promise<CreatePostDto> {
    try {
      return await this.postModel.findById(id);
    } catch (error) {
      console.error(`Erro ao buscar post: ${error.message}`);
      throw new Error('Ocorreu um erro ao buscar post.');
    }
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<CreatePostDto> {
    try {
      return await this.postModel.findByIdAndUpdate({ _id: id, }, { $set: updatePostDto, }, { new: true });
    } catch (error) {
      console.error(`Erro ao atualizar post: ${error.message}`);
      throw new Error('Ocorreu um erro ao atualizar post.');
    }
  }

  async remove(id: string) {
    try {
      return await this.postModel.deleteOne({ _id: id });
    } catch (error) {
      console.error(`Erro ao remover post: ${error.message}`);
      throw new Error('Ocorreu um erro ao remover post.');
    }
  }
}
