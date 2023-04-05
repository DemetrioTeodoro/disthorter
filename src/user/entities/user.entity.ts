import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Address } from 'src/address/entities/address.entity';
import { Post } from 'src/posts/entities/post.entity';

export type UserDocument = HydratedDocument<User>;

@Schema({ versionKey: false, timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  birthDate: Date;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] })
  posts: Post[];
  
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }] })
  addresses: Address[];
}

export const UserSchema = SchemaFactory.createForClass(User);
