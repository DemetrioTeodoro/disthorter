import { ArrayMinSize, IsArray, IsMongoId, IsNotEmpty, IsNotEmptyObject, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreatePostDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    type: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    message: string;

    @IsString()
    @IsNotEmpty()
    imagePath: string;

    @IsArray()
    @IsNotEmpty()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    users: CreateUserDto[];
}
