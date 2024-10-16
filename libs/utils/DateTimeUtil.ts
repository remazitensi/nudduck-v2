import dayjs from 'dayjs';

export interface DateProvider {
  toString(localDateTime: Date): string;
}

export class DayjsDateProvider implements DateProvider {
  toString(localDateTime: Date): string {
    return dayjs(localDateTime).format();
  }
}

export class DateTimeUtil {
  private static readonly dateProvider: DateProvider = new DayjsDateProvider();

  static formatDate(localDateTime: Date): string {
    return this.dateProvider.toString(localDateTime);
  }

  static getCurrentDateTime(): Date {
    return new Date();
  }
}
