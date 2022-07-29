import { User } from "../datalayer/user.model";

export interface UserService {
    getUsers(): User[] 
    getUserBy(id: number): User 
}
