import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { setNestApp } from '@libs/common/src/global-settings';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);

  setNestApp(app);

  await app.listen(3001);
}
bootstrap();
