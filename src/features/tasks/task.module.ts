import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from './controllers/task.controller';
import { task, TaskSchema } from './datalayer/task.model';
import { TaskProvider } from './providers';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: task.name, schema: TaskSchema }]),
  ],
  controllers: [TaskController],
  providers: [...TaskProvider],
})
export class TaskModule {}
