import { Task } from "../datalayer/task.model"

export interface TaskService {
    getTask(taskID: number) : Task
    getTasks() : Task[]
}