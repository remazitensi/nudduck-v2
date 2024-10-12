import dayjs, { Dayjs } from 'dayjs';

export class DateTimeUtil {
  static toString(localDateTime: Dayjs): string {
    return localDateTime.format();
  }
}
