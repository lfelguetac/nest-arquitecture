import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './tasks/task.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    UserModule, 
    TaskModule,
    MongooseModule.forRoot('mongodb+srv://all:Z24637O9fsWvj08R@db-mongodb-nyc3-72294-e1b99681.mongo.ondigitalocean.com/admin?tls=true&authSource=admin&replicaSet=db-mongodb-nyc3-72294'),
  ],
})
export class MainModule {}