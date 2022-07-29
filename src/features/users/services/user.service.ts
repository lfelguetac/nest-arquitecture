import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../contract/repository';
import { UserService } from '../contract/services';
import { User } from '../datalayer/user.model';

@Injectable()
export class UserServiceImpl implements UserService {
  
  constructor(@Inject("UserRepository") private readonly userRepository: UserRepository) {}
  
  getUserBy(id: number): User {
    return this.userRepository.getUserById(id);
  }

  getUsers(): User[] {
    return this.userRepository.getUsers();
  }
  

}

