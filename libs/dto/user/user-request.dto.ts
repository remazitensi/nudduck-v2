import { IsString, IsEmail, IsOptional, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserRequestDto {
  @ApiProperty({ description: '유저 닉네임', example: 'remazitensi' })
  @IsString()
  nickname: string;

  @ApiProperty({ description: '유저 이메일', example: 'guming0104@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: '유저 이름', example: 'rem' })
  @IsString()
  name: string;

  @ApiProperty({ description: '프로필 이미지 URL', example: 'https://remazitensi/profile-image.jpg', required: false })
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiProperty({ description: '유저 해시태그 목록', example: ['Developer'], required: false })
  @IsOptional()
  @IsArray()
  hashtags?: string[];

  constructor(nickname: string, email: string, name: string, imageUrl?: string, hashtags?: string[]) {
    this.nickname = nickname;
    this.email = email;
    this.name = name;
    this.imageUrl = imageUrl;
    this.hashtags = hashtags;
  }
}
