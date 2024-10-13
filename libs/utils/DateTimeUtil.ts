export interface DateProvider {
  toString(localDateTime: Date): string;
}

import dayjs from 'dayjs';

export class DayjsDateProvider implements DateProvider {
  toString(localDateTime: Date): string {
    return dayjs(localDateTime).format();
  }
}

export class DateTimeUtil {
  private readonly dateProvider: DateProvider;

  constructor(dateProvider: DateProvider) {
    this.dateProvider = dateProvider;
  }

  formatDate(localDateTime: Date): string {
    return this.dateProvider.toString(localDateTime);
  }

  getCurrentDateTime(): Date {
    return new Date();
  }
}
