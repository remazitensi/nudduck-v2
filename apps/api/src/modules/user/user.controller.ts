import { Controller, Post, Body } from '@nestjs/common';
import { UserRequestDto } from '@libs/dto/user/user-request.dto';
import { UserService } from '@libs/services/user.service';
import { UserDetailDto } from '@libs/dto/user/user-detail.dto';
import { User } from '@libs/entity/user';
import { DateTimeUtil, DayjsDateProvider } from '@libs/utils/DateTimeUtil';

@Controller('user')
export class UserController {
  private readonly dateTimeUtil: DateTimeUtil;

  constructor(private readonly userService: UserService) {
    this.dateTimeUtil = new DateTimeUtil(new DayjsDateProvider());
  }

  @Post()
  createUser(@Body() userRequestDto: UserRequestDto): UserDetailDto {
    const currentDateTime: Date = this.dateTimeUtil.getCurrentDateTime();

    const userData: User = new User(
      1, // 임시 아이디
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
