import { task } from '../datalayer/task.model';

export interface TaskService {
  getTask(taskID: number): task;
  getTasks(): task[];
}
