import dayjs from "dayjs";
import "dayjs/locale/ko"; // 로케일 import
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("ko");

/**
 * 날짜를 절대 시간 형식으로 포맷팅 (YYYY년 M월 D일 HH:mm)
 * @param date - 포맷할 날짜
 * @returns 포맷된 날짜 문자열 (예: 2025년 11월 3일 13:22)
 */
export function formatAbsoluteDate(date: string | Date): string {
  return dayjs(date).format("YYYY년 M월 D일 HH:mm");
}

/**
 * 날짜를 상대 시간 형식으로 포맷팅 (예: 2시간 전)
 * @param date - 포맷할 날짜
 * @returns 상대 시간 문자열
 */
export function formatRelativeDate(date: string | Date): string {
  return dayjs(date).fromNow();
}
