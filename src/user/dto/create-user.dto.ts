import { ArrayMinSize, IsArray, IsDate, IsEmail, IsNotEmpty, IsString, IsStrongPassword, ValidateNested } from "class-validator";
import { CreatePostDto } from "src/posts/dto/create-post.dto";

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

  @IsArray()
  @IsNotEmpty()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  posts: CreatePostDto[];
}
