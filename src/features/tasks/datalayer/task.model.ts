import mongoose from "mongoose";

export type TaskDocument = Task & Document;

export interface Task  {
    ID: number
    Description: string
    HHEstimated: number
}


export const TaskSchema = new mongoose.Schema({
    ID: String,
    Description: Number,
    HHEstimated: String,
});


