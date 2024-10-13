import { Controller, Get } from '@nestjs/common';
import { ApiService } from '@apps/api/src/api.service';
import { EntityService } from '@libs/entity/src/entity.service';
import { UserDetailDto } from '@libs/dto/user/user-detail.dto';
import { User } from '@libs/entity/user';
import { DateTimeUtil, DayjsDateProvider } from '@libs/utils/DateTimeUtil';

@Controller('api')
export class ApiController {
  private readonly dateTimeUtil: DateTimeUtil;

  constructor(
    private readonly apiService: ApiService,
    private readonly entityService: EntityService
  ) {
    this.dateTimeUtil = new DateTimeUtil(new DayjsDateProvider());
  }

  @Get()
  getHello(): string {
    return this.apiService.getHello();
  }

  @Get('/entity')
  getEntity(): string {
    return this.entityService.getHello();   
  }

  @Get('/user')
  getUser(): UserDetailDto {
    const currentDateTime: Date = this.dateTimeUtil.getCurrentDateTime();
  
    const userData: User = new User(
      1, // 임시 ID
      'remazitensi',
      'guming0104@gmail.com',
      'rem',
      'https://remazitensi/profile-image.jpg',
      ['Developer'],
      currentDateTime
    );
    return new UserDetailDto(userData, this.dateTimeUtil);
  }  
}
