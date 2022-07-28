import { NestFactory } from '@nestjs/core';
import { MainModule } from './features/main.module';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  await app.listen(3000);
}

bootstrap();
