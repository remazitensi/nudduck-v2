import { Controller, Post, Body } from '@nestjs/common';
import { UserRequestDto } from '@libs/dto/user/user-request.dto';
import { UserService } from '@libs/services/user.service';
import { UserDetailDto } from '@libs/dto/user/user-detail.dto';
import { User } from '@libs/entity/user';
import { DateTimeUtil } from '@libs/utils/DateTimeUtil';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() userRequestDto: UserRequestDto): UserDetailDto {
    const currentDateTime: Date = DateTimeUtil.getCurrentDateTime();

    const userData: User = new User(
      1,
      userRequestDto.nickname!,
      userRequestDto.email ?? '',
      userRequestDto.name ?? '',
      userRequestDto.imageUrl ?? '',
      userRequestDto.hashtags ?? [],
      currentDateTime
    );

    return this.userService.createUser(userData);
  }
}
