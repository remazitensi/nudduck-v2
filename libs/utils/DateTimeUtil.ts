import { LocalDateTime } from 'js-joda';

export class DateTimeUtil {
  static toString(localDateTime: LocalDateTime): string {
    return localDateTime.toString();
  }
}
