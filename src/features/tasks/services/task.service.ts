import { Inject, Injectable } from '@nestjs/common';
import { TaskRepository } from '../contract/repository';
import { TaskService } from '../contract/services';
import { Task } from '../datalayer/task.model';


@Injectable()
export class TaskServiceImpl implements TaskService {

  constructor(@Inject('TaskRepository') private taskRepo: TaskRepository){}

  getTask(taskID: number) : Task {
    try {
      return this.taskRepo.getTaskBy(taskID)
    } catch (error) {
      console.log(error);
    }
  }

  getTasks() : Task[] {
    return this.taskRepo.getAllTasks();
  }

}
