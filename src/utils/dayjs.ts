import dayjs from 'dayjs';
import ru from 'dayjs/locale/ru';
import utc from 'dayjs/plugin/utc';
import localeData from 'dayjs/plugin/localeData';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';

dayjs.locale(ru);
dayjs.extend(utc);
dayjs.extend(localeData);
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(quarterOfYear);

export default dayjs;
