import { Controller, Get, Inject } from '@nestjs/common';
import { UserService } from '../contract/services';

@Controller({ path: 'users' })
export class UserController {

  constructor(@Inject("UserService") private readonly userService: UserService) {}

  @Get("/all")
  getUsers() {
    return this.userService.getUsers()
  }


}
