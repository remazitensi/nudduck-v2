import { Injectable } from '@nestjs/common';
import { UserDetailDto } from '@libs/dto/user/user-detail.dto';
import { User } from '@libs/entity/user';

@Injectable()
export class UserService {
  createUser(userData: User): UserDetailDto {
    // 사용자 생성 로직
    // 실제로는 데이터베이스에 저장하는 로직이 필요
    return new UserDetailDto(userData);
  }
}
