import { Controller, Get } from '@nestjs/common';
import { ApiService } from '@apps/api/src/api.service';
import { EntityService } from '@libs/entity/src/entity.service';
import { UserDetailDto } from '@libs/dto/user/user-detail.dto';
import { plainToInstance } from 'class-transformer';

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
    const userData = {
      id: 1,
      nickname: 'remazitensi',
      email: 'guming0104@gmail.com',
      name: 'rem',
      imageUrl: 'https://remazitensi/profile-image.jpg',
      hashtags: ['Developer'],
      createdAt: '2024-10-10T00:00:00.000Z',
    };

    // UserDetailDto로 변환
    const userDto = plainToInstance(UserDetailDto, userData);
    return userDto;
  }
}
