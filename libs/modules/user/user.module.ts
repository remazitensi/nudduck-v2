import { Module } from '@nestjs/common';
import { UserController } from '@libs/controllers/user/user.controller';
import { UserService } from '@libs/services/user/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}