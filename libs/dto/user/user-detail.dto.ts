import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { LocalDateTime } from 'js-joda';
import { DateTimeUtil } from '@libs/utils/DateTimeUtil';
import { User } from '@libs/entity/user';

export class UserDetailDto {
  @ApiProperty({ description: '유저 ID', example: 1 })
  @Exclude() private readonly _userId: number;

  @ApiProperty({ description: '유저 닉네임', example: 'remazitensi' })
  @Exclude() private readonly _nickname: string;

  @ApiProperty({ description: '유저 이메일', example: 'guming0104@gmail.com' })
  @Exclude() private readonly _email: string;

  @ApiProperty({ description: '유저 이름', example: 'rem' })
  @Exclude() private readonly _name: string;

  @ApiProperty({ description: '프로필 이미지 URL', example: 'https://remazitensi/profile-image.jpg' })
  @Exclude() private readonly _imageUrl: string;       

  @ApiProperty({ description: '유저 해시태그 목록', example: ['Developer'] })     
  @Exclude() private readonly _hashtags: string[];

  @ApiProperty({ description: '가입 일시', example: '2024-10-10T00:00:00.000Z' })
  @Exclude() private readonly _signupDateTime: LocalDateTime;

  constructor(user: User) {
    this._userId = user.id;
    this._nickname = user.nickname;
    this._email = user.email;
    this._name = user.name;
    this._imageUrl = user.imageUrl || '';
    this._hashtags = user.hashtags || [];
    this._signupDateTime = user.createdAt; 
  }

  @Expose()
  get userId(): number {
    return this._userId;
  }

  @Expose()
  get nickname(): string {
    return this._nickname;
  }

  @Expose()
  get email(): string {
    return this._email;
  }

  @Expose()
  get name(): string {
    return this._name;
  }

  @Expose()
  get imageUrl(): string {
    return this._imageUrl;
  }

  @Expose()
  get hashtags(): string[] {
    return this._hashtags;
  }

  @Expose()
  get signupDateTime(): string {
    return DateTimeUtil.toString(this._signupDateTime);
  }
}
