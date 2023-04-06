import { IsMongoId, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreateAddressDto {

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsString()
    @IsNotEmpty()
    state: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    street: string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    number: number;

    @IsString()
    @IsNotEmpty()
    complement: string;

    @IsMongoId()
    @IsNotEmpty()
    user: CreateUserDto;
}
