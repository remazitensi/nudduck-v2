import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
<<<<<<< HEAD
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);

  // 직렬화 및 역직렬화 설정
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(3001);
=======

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  await app.listen(3000);
>>>>>>> origin/main
}
bootstrap();
