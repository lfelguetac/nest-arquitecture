import { task } from "../datalayer/task.model"

export interface TaskRepository {
    getTaskBy(id: number): task
    getAllTasks(): task[]
}