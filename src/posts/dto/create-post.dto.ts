import { User } from "src/user/entities/user.entity";

export class CreatePostDto {
    type: string;
    message: string;
    imagePath: string;
    users: [User];
}
