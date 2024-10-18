import dayjs from 'dayjs';

export class DateTimeUtil {
  static formatDate(localDateTime: Date): string {
    return dayjs(localDateTime).format();
  }

  static getCurrentDateTime(): Date {
    return new Date();
  }
}
