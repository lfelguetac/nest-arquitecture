import { Inject, Injectable } from '@nestjs/common';
import { TaskRepository } from '../contract/repository';
import { TaskService } from '../contract/services';
import { Task } from '../datalayer/task.model';


@Injectable()
export class TaskServiceImpl implements TaskService {

  constructor(@Inject('TaskRepository') private taskRepo: TaskRepository){}

  getTask(taskID: number) : Task {
      return this.taskRepo.getTaskBy(taskID)
  }

  getTasks() : Task[] {
    return this.taskRepo.getAllTasks();
  }

}
