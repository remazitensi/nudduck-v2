import { Exclude, Expose } from 'class-transformer';

export class User {
  @Exclude() private readonly id: number;
  @Exclude() private readonly nickname: string; 
  @Exclude() private readonly email: string;
  @Exclude() private readonly name: string;
  @Exclude() private readonly imageUrl: string;
  @Exclude() private readonly hashtags: string[];
  @Exclude() private readonly createdAt: Date;

  constructor(
    id: number,
    nickname: string,
    email: string,
    name: string,
    imageUrl: string,
    hashtags: string[],
    createdAt: Date
  ) {
    this.id = id;
    this.nickname = nickname;
    this.email = email;
    this.name = name;
    this.imageUrl = imageUrl;
    this.hashtags = hashtags;
    this.createdAt = createdAt;
  }

  @Expose()
  getId(): number {
    return this.id;
  }

  @Expose()
  getNickname(): string {
    return this.nickname;
  }

  @Expose()
  getEmail(): string {
    return this.email;
  }

  @Expose()
  getName(): string {
    return this.name;
  }

  @Expose()
  getImageUrl(): string {
    return this.imageUrl;
  }

  @Expose()
  getHashtags(): string[] {
    return this.hashtags;
  }

  @Expose()
  getCreatedAt(): Date {
    return this.createdAt;
  }
}
