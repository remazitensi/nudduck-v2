import { Exclude, Expose } from 'class-transformer';
import dayjs, { Dayjs } from 'dayjs';
import { DateTimeUtil } from '@libs/utils/DateTimeUtil';

export class User {
  @Exclude() private readonly _id: number;
  @Exclude() private readonly _nickname: string; 
  @Exclude() private readonly _email: string;
  @Exclude() private readonly _name: string;
  @Exclude() private readonly _imageUrl: string;
  @Exclude() private readonly _hashtags: string[];
  @Exclude() private readonly _createdAt: Dayjs;

  constructor(
    id: number,
    nickname: string,
    email: string,
    name: string,
    imageUrl: string,
    hashtags: string[],
    createdAt: string
  ) {
    this._id = id;
    this._nickname = nickname;
    this._email = email;
    this._name = name;
    this._imageUrl = imageUrl;
    this._hashtags = hashtags;
    this._createdAt = dayjs(createdAt);
  }

  @Expose()
  get id(): number {
    return this._id;
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
  get createdAt(): string {
    return DateTimeUtil.toString(this._createdAt);
  }
}
