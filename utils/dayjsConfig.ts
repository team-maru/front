import dayjs from "dayjs";
import "dayjs/locale/ko"; // 로케일 import
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("ko");
