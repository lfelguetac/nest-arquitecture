import { Task } from "../datalayer/task.model"

export interface TaskRepository {
    getTaskBy(id: number): Task
    getAllTasks(): Task[]
}