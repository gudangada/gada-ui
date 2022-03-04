import dayjs from "dayjs";
import { name } from "dayjs/locale/id";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isToday from "dayjs/plugin/isToday";

const dayjsInstance = dayjs;
dayjsInstance.locale(name);
dayjsInstance.extend(timezone);
dayjsInstance.extend(advancedFormat);
dayjsInstance.extend(customParseFormat);
dayjsInstance.extend(isToday);

export const formatDate = (
  date: string | Date | dayjs.Dayjs | null,
  format = "DD MMM YYYY",
  withLocale = false
): string => {
  if (withLocale) {
    return `${dayjsInstance(date).format(format)} WIB`;
  }
  return `${dayjsInstance(date).format(format)}`;
};

export const formatPayloadDate = (
  date: string | Date | dayjs.Dayjs
): string => {
  return formatDate(date, "YYYY-MM-DD", false);
};

export const validateFormat = (date: string | Date, format = "YYYY-MM-DD") => {
  return dayjsInstance(date, format).format(format) === date;
};

export const parseDate = (date: string, format = "DD MMM YYYY, HH:mm") => {
  return dayjsInstance(date, format).toDate();
};

/**
 *
 * @param firstDate first date you want to compare
 * @param secondDate second date you want to compare
 * @returns day difference between two of them
 */
export function dayDiff(
  firstDate: string | Date | dayjs.Dayjs,
  secondDate: string | Date | dayjs.Dayjs
): number {
  return dayjsInstance(firstDate).diff(secondDate, "day");
}
/**
 *
 * @param firstDate first date you want to compare
 * @param secondDate second date you want to compare
 * @returns hour difference between two of them
 */
export function hourDiff(
  firstDate: string | Date | dayjs.Dayjs,
  secondDate: string | Date | dayjs.Dayjs
): number {
  return dayjsInstance(firstDate).diff(secondDate, "hour");
}

export default dayjsInstance;
export { dayjsInstance };
