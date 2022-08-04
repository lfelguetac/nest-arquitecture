import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserRepositoryImpl } from './datalayer/user.repository';
import { UserServiceImpl } from './services/user.service';

@Module({
  controllers: [UserController],
  providers: [
    { provide: 'UserService', useClass: UserServiceImpl },
    { provide: 'UserRepository', useClass: UserRepositoryImpl },
  ],
})
export class UserModule {}
