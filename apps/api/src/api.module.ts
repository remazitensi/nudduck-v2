import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { EntityService } from '../../../libs/entity/src/entity.service';
<<<<<<< HEAD
import { UserModule } from '@libs/modules/user/user.module';

@Module({
  imports: [UserModule],
=======

@Module({
  imports: [],
>>>>>>> origin/main
  controllers: [ApiController],
  providers: [ApiService, EntityService],
})
export class ApiModule {}
