import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/entities/user.entity';

export type AddressDocument = HydratedDocument<Address>;

@Schema({ versionKey: false, timestamps: true })
export class Address {
    @Prop({ required: true })
    country: string;

    @Prop({ required: true })
    state: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    street: string;

    @Prop({ required: true })
    number: number;

    @Prop({ required: true })
    complement: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
