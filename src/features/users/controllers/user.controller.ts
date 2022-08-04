import { Controller, Get, Inject, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from '../contract/services';

type ParamsOne = {
  id: number;
};

@Controller({ path: 'users' })
export class UserController {
  constructor(
    @Inject('UserService') private readonly userService: UserService,
  ) {}

  @Get('/all')
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('/:id')
  getUserId(@Req() req: Request) {
    const params = req.params as unknown as ParamsOne;
    console.log(params);
    return this.userService.getUserBy(Number(params.id));
  }
}
