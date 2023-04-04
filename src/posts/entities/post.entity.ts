import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/entities/user.entity';

export type PostDocument = HydratedDocument<Post>;

@Schema({ versionKey: false, timestamps: true })
export class Post {
  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  message: string;

  @Prop()
  imagePath: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User'  })
  user: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);
