import { Controller, Post, Body } from '@nestjs/common';
import { UserRequestDto } from '@libs/dto/user/user-request.dto';
import { UserService } from '@libs/services/user/user.service';
import { UserDetailDto } from '@libs/dto/user/user-detail.dto';
import { User } from '@libs/entity/user';
import { LocalDateTime } from 'js-joda';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() userRequestDto: UserRequestDto): UserDetailDto {
    const userData: User = new User(
      1, // 임시 아이디
      userRequestDto.nickname,
      userRequestDto.email,
      userRequestDto.name,
      userRequestDto.imageUrl || '', // 기본값을 빈 문자열로 설정
      userRequestDto.hashtags || [], // 기본값을 빈 배열로 설정
      LocalDateTime.now() // LocalDateTime 객체로 설정
    );

    return this.userService.createUser(userData);
  }
}
