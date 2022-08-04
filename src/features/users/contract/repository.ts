import { User } from '../datalayer/user.model';

export interface UserRepository {
  getUsers(): User[];
  getUserById(id: number): User;
}
