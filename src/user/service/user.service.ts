import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User, UserDocument } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    try {
      return await new this.userModel(createUserDto).save();
    } catch (error) {
      console.error(`Erro ao salvar usuário: ${error.message}`);
      throw new Error('Ocorreu um erro ao salvar usuário.');
    }
  }

  async findAll(): Promise<CreateUserDto[]> {
    try {
      return await this.userModel.find();
    } catch (error) {
      console.error(`Erro ao buscar usuários: ${error.message}`);
      throw new Error('Ocorreu um erro ao buscar usuários.');
    }
  }

  async findOne(id: string): Promise<CreateUserDto> {
    try {
      const user = await this.userModel.aggregate([
        { $match: { _id: new mongoose.Types.ObjectId(id) } },
        {
          $lookup: {
            from: "addresses",
            localField: "addresses",
            foreignField: "_id",
            as: "addresses"
          },
        },
      ]);

      return user[0];
    } catch (error) {
      console.error(`Erro ao buscar usuário: ${error.message}`);
      throw new Error('Ocorreu um erro ao buscar usuário.');
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UpdateUserDto> {
    try {
      return await this.userModel.findByIdAndUpdate({ _id: id, }, { $set: updateUserDto, }, { new: true });
    } catch (error) {
      console.error(`Erro ao atualizar usuário: ${error.message}`);
      throw new Error('Ocorreu um erro ao atualizar usuário.');
    }
  }

  async remove(id: string) {
    try {
      return await this.userModel.deleteOne({ _id: id });
    } catch (error) {
      console.error(`Erro ao remover usuário: ${error.message}`);
      throw new Error('Ocorreu um erro ao remover usuário.');
    }
  }
}
