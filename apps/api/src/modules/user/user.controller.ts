import { Controller, Post, Body } from '@nestjs/common';
import { UserRequestDto } from '@libs/dto/user/user-request.dto';
import { UserService } from '@libs/services/user.service';
import { UserDetailDto } from '@libs/dto/user/user-detail.dto';
import { User } from '@libs/entity/user';
import dayjs from 'dayjs';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() userRequestDto: UserRequestDto): UserDetailDto {
    const userData: User = new User(
      1, // 임시 아이디
      userRequestDto.nickname!,
      userRequestDto.email ?? '',
       userRequestDto.name ?? '',
      userRequestDto.imageUrl ?? '', 
      userRequestDto.hashtags ?? [],
      dayjs()
    );

    return this.userService.createUser(userData);
  }
}
