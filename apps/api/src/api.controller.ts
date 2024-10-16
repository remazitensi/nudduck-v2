import { Controller, Get } from '@nestjs/common';
import { ApiService } from '@apps/api/src/api.service';
import { EntityService } from '@libs/entity/src/entity.service';
import { UserDetailDto } from '@libs/dto/user/user-detail.dto';
import { User } from '@libs/entity/user';
import { DateTimeUtil } from '@libs/utils/DateTimeUtil';

@Controller('api')
export class ApiController {
  constructor(
    private readonly apiService: ApiService,
    private readonly entityService: EntityService
  ) {}

  @Get()
  getHello(): string {
    return this.apiService.getHello();
  }

  @Get('/user')
  getUser(): UserDetailDto {
    const currentDateTime: Date = DateTimeUtil.getCurrentDateTime();

    // Todo: 사용자 정보를 데이터베이스 또는 외부 서비스에서 가져오는 로직 구현 필요
    const userData: User = new User(
      1, // Todo: 임시 ID를 데이터베이스에서 생성된 사용자 ID로 대체 필요
      'remazitensi', // Todo: 사용자 이름을 실제 사용자 정보로 대체 필요
      'guming0104@gmail.com', // Todo: 이메일을 실제 사용자 정보로 대체 필요
      'rem', // Todo: 사용자 닉네임을 실제 사용자 정보로 대체 필요
      'https://remazitensi/profile-image.jpg', // Todo: 프로필 이미지를 실제 사용자 이미지로 대체 필요
      ['Developer'], // Todo: 사용자 역할을 실제 사용자 정보로 대체 필요
      currentDateTime
    );

    return new UserDetailDto(userData, DateTimeUtil); // DateTimeUtil 인스턴스 대신 정적 클래스 사용
  }
}
