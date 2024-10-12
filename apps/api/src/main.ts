import { NestFactory } from '@nestjs/core';
<<<<<<< HEAD
import { ApiModule } from '@apps/api/src/api.module';
import { setNestApp } from '@libs/common/src/global-settings';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  // 글로벌 설정 적용
  setNestApp(app);

=======
import { ApiModule } from './api.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
>>>>>>> origin/main
  await app.listen(3000);
}
bootstrap();
