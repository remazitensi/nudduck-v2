import { Controller, Get } from '@nestjs/common';
import { ApiService } from '@apps/api/src/api.service';
import { EntityService } from '@libs/entity/src/entity.service';
import { UserDetailDto } from '@libs/dto/user/user-detail.dto';
import { User } from '@libs/entity/user';

@Controller()
export class ApiController {
  constructor(
    private readonly apiService: ApiService,
    private readonly entityService: EntityService
  ) {}

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
    const userData = new User(
      1,
      'remazitensi',
      'guming0104@gmail.com',
      'rem',
      'https://remazitensi/profile-image.jpg',
      ['Developer'],
      '2024-10-10T00:00:00.000Z'
    );
  
    return new UserDetailDto(userData);
  }
}
