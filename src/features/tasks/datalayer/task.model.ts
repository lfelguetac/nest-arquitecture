import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TaskDocument = task & Document;

// export interface Task  {
//     ID: number
//     Description: string
//     HHEstimated: number
// }


@Schema()
export class task {

    @Prop()
    ID: string;

    @Prop()
    Description: string;

    @Prop()
    HHEstimated: number;
}


// export const TaskSchema = new mongoose.Schema({
//     ID: String,
//     Description: Number,
//     HHEstimated: String,
// });


export const TaskSchema = SchemaFactory.createForClass(task);
