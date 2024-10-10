import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { EntityService } from '../../../libs/entity/src/entity.service';
import { UserModule } from '@libs/modules/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [ApiController],
  providers: [ApiService, EntityService],
})
export class ApiModule {}
