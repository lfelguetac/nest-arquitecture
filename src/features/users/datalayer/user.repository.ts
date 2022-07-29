import { UserRepository } from "../contract/repository";
import { User } from "./user.model";

const users : User[] = [
    {ID: 1, Rut: '16042315-3', Nombre: 'Nombres'},
    {ID: 2, Rut: '16042315-5', Nombre: 'Alo'},
    {ID: 3, Rut: '15042315-2', Nombre: 'Juan'},
]

export class UserRepositoryImpl implements UserRepository {
    
    getUserById(id: number): User {
        return users.find(it => it.ID === id);
    }
    
    getUsers(): User[] {
        return users;
    }

}