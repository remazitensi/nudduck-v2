import { Injectable } from '@nestjs/common';
import { UserDetailDto } from '@libs/dto/user/user-detail.dto';
import { User } from '@libs/entity/user';
import { DateTimeUtil } from '@libs/utils/DateTimeUtil';

@Injectable()
export class UserService {
  createUser(userData: User): UserDetailDto {
    const createdAtDate: Date = userData.getCreatedAt(); 
    // Todo: User 클래스에 createdAt을 Date로 반환하는 메서드 추가 필요
    // 현재 User 클래스에 getCreatedAt() 메서드가 구현되어 있지 않음
    // 이 메서드를 추가하여 createdAt 속성을 Date 객체로 반환해야 함

    return new UserDetailDto(userData, DateTimeUtil);
  }
}
