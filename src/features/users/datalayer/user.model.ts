import mongoose from 'mongoose';

export type UserDocument = User & Document;

export interface User {
  ID: number;
  Rut: string;
  Nombre: string;
}

export const UserSchema = new mongoose.Schema({
  ID: String,
  Rut: Number,
  Nombre: String,
});
