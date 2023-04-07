import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressService } from '../service/address.service';
import { CreateAddressDto } from '../dto/create-address.dto';
import { UpdateAddressDto } from '../dto/update-address.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) { }

  @Post()
  async create(@Body() createAddressDto: CreateAddressDto): Promise<CreateAddressDto> {
    return await this.addressService.create(createAddressDto);
  }

  @Get()
  async findAll(): Promise<CreateAddressDto[]> {
    return await this.addressService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CreateAddressDto> {
    return await this.addressService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto): Promise<CreateAddressDto> {
    return await this.addressService.update(id, updateAddressDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.addressService.remove(id);
  }
}
