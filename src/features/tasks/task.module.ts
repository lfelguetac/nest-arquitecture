import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from './controllers/task.controller';
import { TaskRepositoryImpl } from './datalayer/task.repository';
import { TaskServiceImpl } from './services/task.service';
import { TaskSchema } from './datalayer/task.model';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'task', schema: TaskSchema }])],
    controllers: [TaskController],
    providers: [
        { provide: 'TaskService', useClass: TaskServiceImpl },
        { provide: 'TaskRepository', useClass: TaskRepositoryImpl }
    ]
})
export class TaskModule {}
