import { Injectable } from "@nestjs/common"
import mongoose from "mongoose"
import { TaskRepository } from "../contract/repository"
import { Task, TaskSchema } from "./task.model"

  
const task: Task[] = [
    {ID: 1, Description: 'Lavar la loza', HHEstimated: 0.5},
    {ID: 2, Description: 'Dejar niño al cole', HHEstimated: 1.5},
    {ID: 3, Description: 'Cocinar', HHEstimated: 1},
]

  
@Injectable()
export class TaskRepositoryImpl implements TaskRepository {

    getAllTasks() {
        
        (async () => {
        try {
            const task = mongoose.model("task", TaskSchema)
            const tareas = task.find()
            console.log('tareas: ', await tareas);
            
        } catch (error) {
            console.log(error);
            
        }

        })()

        return task
    }

    getTaskBy(id: number): Task {
        return task.find(t => t.ID === id)
    }

}
