import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateAddressDto } from '../dto/create-address.dto';
import { UpdateAddressDto } from '../dto/update-address.dto';
import { Address, AddressDocument } from '../entities/address.entity';

@Injectable()
export class AddressService {

  constructor(@InjectModel(Address.name) private addressModel: Model<AddressDocument>) { }

  async create(createAddressDto: CreateAddressDto): Promise<CreateAddressDto> {
    try {
      return await new this.addressModel(createAddressDto).save();
    } catch (error) {
      console.error(`Erro ao salvar endereço: ${error.message}`);
      throw new Error('Ocorreu um erro ao salvar endereço.');
    }
  }

  async findAll(): Promise<CreateAddressDto[]> {
    try {
      return await this.addressModel.find();
    } catch (error) {
      console.error(`Erro ao buscar endereços: ${error.message}`);
      throw new Error('Ocorreu um erro ao buscar endereços.');
    }
  }

  async findOne(id: string): Promise<CreateAddressDto> {
    try {
      return await this.addressModel.findById(id);
    } catch (error) {
      console.error(`Erro ao buscar endereço: ${error.message}`);
      throw new Error('Ocorreu um erro ao buscar endereço.');
    }
  }

  async update(id: string, updateAddressDto: UpdateAddressDto): Promise<CreateAddressDto> {
    try {
      return await this.addressModel.findByIdAndUpdate({ _id: id, }, { $set: updateAddressDto, }, { new: true });
    } catch (error) {
      console.error(`Erro ao atualizar endereço: ${error.message}`);
      throw new Error('Ocorreu um erro ao atualizar endereço.');
    }
  }

  async remove(id: string) {
    try {
      return await this.addressModel.deleteOne({ _id: id });
    } catch (error) {
      console.error(`Erro ao remover endereço: ${error.message}`);
      throw new Error('Ocorreu um erro ao remover endereço.');
    }
  }
}
