import { Module } from '@nestjs/common';
import { UserController } from '@api/modules/user/user.controller';
import { UserService } from '@libs/services/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}