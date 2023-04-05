import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      process.env.URI
    ),
    PostsModule,
    UserModule,
    AddressModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
