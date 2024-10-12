import { NestFactory } from '@nestjs/core';
import { ApiModule } from '@apps/api/src/api.module';
import { setNestApp } from '@libs/common/src/global-settings';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  // 글로벌 설정 적용
  setNestApp(app);

  await app.listen(3000);
}
bootstrap();
