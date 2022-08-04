import { Provider } from '@nestjs/common';
import { TaskRepositoryImpl } from '../datalayer/task.repository';
import { TaskServiceImpl } from '../services/task.service';

export const TaskProvider: Provider[] = [
  {
    provide: 'TaskService',
    useClass: TaskServiceImpl,
  },
  { provide: 'TaskRepository', useClass: TaskRepositoryImpl },
];
