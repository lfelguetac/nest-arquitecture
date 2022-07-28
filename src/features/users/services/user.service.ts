import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../contract/repository';
import { UserService } from '../contract/services';
import { User } from '../datalayer/user.model';

@Injectable()
export class UserServiceImpl implements UserService {
  
  constructor(@Inject("UserRepository") private readonly userRepository: UserRepository) {}

  getUsers(): User[] {
    return this.userRepository.getUsers();
  }
  

}

