import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User, UserDocument } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    try {
      return await new this.userModel(createUserDto).save();
    } catch (error) {
      throw new Error('Ocorreu um erro ao salvar usuário.');
    }
  }

  async findAll(): Promise<CreateUserDto[]>  {
    try {
      return await await this.userModel.find();
    } catch (error) {
      throw new Error('Ocorreu um erro ao buscar usuários.');
    }
  }

  async findOne(id: string): Promise<CreateUserDto> {
    try {
      return await this.userModel.findById(id);   
    } catch (error) {
      throw new Error('Ocorreu um erro ao buscar usuário.');
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<CreateUserDto> {
    try {
      return await this.userModel.findByIdAndUpdate({ _id: id, }, { $set: updateUserDto, });
    } catch (error) {
      throw new Error('Ocorreu um erro ao editar usuário.');
    }
  }

  async remove(id: string) {
    try {
      return await this.userModel.deleteOne({ _id: id });
    } catch (error) {
      throw new Error('Ocorreu um erro ao remover usuário.');
    }
  }
}
