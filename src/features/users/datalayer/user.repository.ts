import { UserRepository } from "../contract/repository";
import { User } from "./user.model";

const Users : User[] = [
    {ID: 1, Rut: '16042315-3', Nombre: 'Nombres'},
    {ID: 2, Rut: '16042315-5', Nombre: 'Alo'},
]

export class UserRepositoryImpl implements UserRepository {
    
    getUsers(): User[] {
        return Users
    }

}