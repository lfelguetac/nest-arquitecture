import { Inject, Injectable } from '@nestjs/common';
import { TaskRepository } from '../contract/repository';
import { TaskService } from '../contract/services';
import { task } from '../datalayer/task.model';


@Injectable()
export class TaskServiceImpl implements TaskService {

  constructor(@Inject('TaskRepository') private taskRepo: TaskRepository){}

  getTask(taskID: number) : task {
      return this.taskRepo.getTaskBy(taskID)
  }

  getTasks() : task[] {
    return this.taskRepo.getAllTasks();
  }

}
