import numberFormat from 'format-number';
import { dateFormats } from '../constants/dates';
import dayjs from './dayjs';

export const formatDate = (date: string, format = dateFormats.DEFAULT) => dayjs(date).format(format);
export const formatDateDatePicker = (date: string) => dayjs(date).utcOffset(3).format('YYYY-MM-DD');
export const formatDateDiff = (begin: string, end: string, type: any = 'day') => dayjs(end)
  .diff(dayjs(begin), type);
export const formatDateTime = (date: string, format: string = 'DD.MM.YYYY HH:mm') => dayjs(date)
  .utcOffset(3).format(format);

export const formatPhone = (phone: string): string => phone && phone.replace(
  /\+?([78])(\d{3})(\d{3})(\d{2})(\d{2})/,
  '+$1 ($2) $3-$4-$5',
);

export const formatPassport = (number: string): string => number && number.replace(
  /(\d{2})(\d{2})(\d{6})/,
  '$1 $2 $3',
);

export const formatString = (string: string, length: number) => {
  const isDefined = Boolean(string);
  if (!isDefined) {
    return '';
  }

  if (string.length < length) {
    return string;
  }

  const subString = string.substring(0, length);
  const blankIndex = subString.lastIndexOf(' ');
  return `${subString.slice(0, blankIndex)}...`;
};

export function formatNumber (number: number, options = {}) {
  return numberFormat({
    integerSeparator: ' ',
    ...options,
  })(number);
}

export function formatPercent (number: number, options = {}) {
  return numberFormat({
    integerSeparator: ' ',
    suffix: '%',
    round: 0,
    ...options,
  })(100 * number);
}

export const formatBytes = (value: number) => {
  if (value === 0) {
    return 0;
  }

  const UNITS = ['B', 'KB', 'MB', 'GB', 'TB'];
  const BYTE_SIZE = 1024;
  let rate = 0;
  let size = value;

  do {
    size /= BYTE_SIZE;
    rate += 1;
  } while (size > BYTE_SIZE && rate < UNITS.length - 1);

  return formatNumber(size, {
    round: 0,
    suffix: UNITS[rate],
  });
};

export const getNoun = (number: number, one: string, few: string, many: string) => {
  let n = Math.abs(number) % 100;

  if (n >= 5 && n <= 20) {
    return many;
  }

  n %= 10;

  if (n === 1) {
    return one;
  }

  if (n > 1 && n < 5) {
    return few;
  }

  return many;
};

export const filterCurrency = (val: any) => {
  let result = val;
  if (typeof val === 'object' || typeof val === 'boolean') {
    return '';
  }
  if (typeof val === 'string') {
    result = parseFloat(val.replace(/[^0-9.]/g, ''));
  }
  return result.toLocaleString('ru', { style: 'currency', currency: 'RUB' });
};

export default {
  formatBytes,
  formatDate,
  formatDateTime,
  formatPhone,
  formatPassport,
  formatString,
  getNoun,
  filterCurrency,
};
