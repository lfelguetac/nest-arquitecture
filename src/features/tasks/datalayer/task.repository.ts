import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { log } from "console"
import mongoose, { Model } from "mongoose"
import { TaskRepository } from "../contract/repository"
import { task, TaskDocument, TaskSchema } from "./task.model"

  
// const task = [
//     {ID: 1, Description: 'Lavar la loza', HHEstimated: 0.5},
//     {ID: 2, Description: 'Dejar niño al cole', HHEstimated: 1.5},
//     {ID: 3, Description: 'Cocinar', HHEstimated: 1},
// ]

  
@Injectable()
export class TaskRepositoryImpl implements TaskRepository {

    constructor(@InjectModel(task.name) private taskModel: Model<TaskDocument>) {}

    getAllTasks() {
        
        console.log("paso x aqui");
        
        (async () => {
            try {
                console.log("aqui");
                
                // const task = mongoose.model("task", TaskSchema)
                // const tareas = await task.find()
                const tasks = await this.taskModel.find()
                console.log('tareas: ',  tasks);
                
                
            } catch (error) {
                console.log(error);
            }
        })()

        return []
    }

    getTaskBy(id: number): task {
        // return task.find(t => t.ID === id)
        return undefined
    }

}
