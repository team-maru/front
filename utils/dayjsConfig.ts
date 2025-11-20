import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("en");

/**
 * 날짜를 절대 시간 형식으로 포맷팅 (YYYY/M/D HH:mm)
 * @param date - 포맷할 날짜
 * @returns 포맷된 날짜 문자열 (예: 2025/11/3 13:22)
 */
export function formatAbsoluteDate(date: string | Date): string {
  return dayjs(date).format("YYYY/M/D HH:mm");
}

/**
 * 날짜를 상대 시간 형식으로 포맷팅 (예: 2시간 전)
 * @param date - 포맷할 날짜
 * @returns 상대 시간 문자열
 */
export function formatRelativeDate(date: string | Date): string {
  return dayjs(date).fromNow();
}
