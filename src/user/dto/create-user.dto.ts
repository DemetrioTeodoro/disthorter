import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsString, IsStrongPassword, MinLength } from "class-validator";

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsDate()
  @IsNotEmpty()
  birthDate: Date;
}
