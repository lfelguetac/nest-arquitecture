import {
  BadRequestException,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Req,
  Res,
} from '@nestjs/common';
import { Request } from 'express';
import { TaskService } from '../contract/services';

type ParamsOne = {
  id: number;
};

@Controller({ path: 'tasks' })
export class TaskController {
  constructor(@Inject('TaskService') private taskService: TaskService) {}

  @Get('/all')
  getAll() {
    return this.taskService.getTasks();
  }

  @Get('/:id')
  getOne(@Req() req: Request) {
    try {
      const params = req.params as unknown as ParamsOne;
      const task = this.taskService.getTask(Number(params.id));
      return {
        ok: true,
        data: task,
      };
    } catch (error) {
      console.log(req);
    }
  }
}
