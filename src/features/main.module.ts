import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_DB_URL } from 'src/config/config-mongo';
import { TaskModule } from './tasks/task.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    UserModule, 
    TaskModule,
    MongooseModule.forRoot(MONGO_DB_URL),
  ],
})
export class MainModule {}

