import { Module } from '@nestjs/common';
import { ApiController } from '@api/api.controller';
import { ApiService } from '@api/api.service';
import { EntityService } from '@libs/entity/src/entity.service';
import { UserModule } from '@api/modules/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [ApiController],
  providers: [ApiService, EntityService],
})
export class ApiModule {}
