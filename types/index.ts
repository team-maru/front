export interface Uri {
  uri: string;
}

export interface ImageUri {
  id: number;
  url: string | "";
}

// Enums
export type BookmarkSource = "EVENT" | "GATHERING";
export type LikeSource = "POST" | "COMMENT";
export type NotificationType = "EVENT" | "COMMENT" | "PROMOTION";
export type Gender = "MALE" | "FEMALE" | "OTHER";
export type UserStatus = "교환학생" | "어학당" | "여행객" | "유학생";
export type Category =
  | "All"
  | "Campus"
  | "Daily Tips"
  | "Eats"
  | "Activity"
  | "Q&A";

// User 관련 타입들
export interface School {
  id: number;
  school_name: string;
  is_member: boolean;
  is_active: boolean;
}

export interface User {
  id: number;
  school_id: number;
  clerk_id: number;
  email: string;
  email_verified: boolean;
  email_verified_synced_at: string;
  first_name?: string;
  last_name?: string;
  nickname: string;
  nickname_updated_at: string;
  country_code: string;
  gender: Gender;
  birth: string;
  status: UserStatus;
  deleted_status: boolean;
  is_active: boolean;
  report_count: number;
  allow_event_notif: boolean;
  allow_comment_notif: boolean;
  allow_promo_notif: boolean;
  created_at: string;
  updated_at: string;
  school?: School; // 관계 데이터
}

// Post 관련 타입들
export interface PostCategory {
  id: number;
  category_name: Category;
}

export interface Post {
  id: number;
  user_id: number;
  category_id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at?: string;
  // 관계 데이터
  author?: User;
  category?: PostCategory;
  images?: PostImage[];
  comments?: Comment[];
  likes?: Like[];
  likeCount?: number;
  commentCount?: number;
}

export interface PostImage {
  id: number;
  post_id: number;
  url: string;
  order: number;
  is_created: string;
}

export interface Comment {
  id: number;
  post_id: number;
  user_id: number;
  content: string;
  parent_comment_id?: number;
  created_at: string;
  updated_at: string;
  // 관계 데이터
  author?: User;
  replies?: Comment[];
  likes?: Like[];
  likeCount?: number;
}

export interface Like {
  id: number;
  source: LikeSource;
  user_id: number;
  target_id: number;
  created_at: string;
  // 관계 데이터
  user?: User;
}

// Event 관련 타입들
export interface Event {
  id: number;
  source: "KOPLE";
  external_id: number;
  thumbnail_url: string;
  title: string;
  content: string;
  start_date: string;
  capacity: number;
  price: number;
  location?: string; // 위치 필드 추가 (선택적)
  created_at: string;
  updated_at: string;
  // 추가 필드들 (예약, 북마크 등)
  currentParticipants?: number;
  isBookmarked?: boolean;
}

// Bookmark 관련 타입들
export interface Bookmark {
  id: number;
  source: BookmarkSource;
  user_id: number;
  target_id: number;
  created_at: string;
}

// Chat 관련 타입들
export interface ChatRoom {
  room_id: number;
  user1_id: number;
  user2_id: number;
  created_at: string;
  last_message_at?: string;
  is_active: boolean;
  // 관계 데이터
  user1?: User;
  user2?: User;
  lastMessage?: Message;
}

export interface Message {
  message_id: number;
  room_id: number;
  sender_id: number;
  content: string;
  is_read: boolean;
  read_at?: string;
  created_at: string;
  deleted_at?: string;
  // 관계 데이터
  sender?: User;
}

// Notification 관련 타입들
export interface Notification {
  id: number;
  user_id: number;
  type: NotificationType;
  target_id?: number;
  title: string;
  content: string;
  is_read: boolean;
  read_at: string;
  is_sent: boolean;
  sent_at: string;
  created_at: string;
  updated_at: string;
}

// Gathering (Buddy) 관련 타입들 - ERD에는 없지만 앱에서 사용하므로 추가
export interface Gathering {
  id: number;
  title: string;
  description: string;
  meetDate: string;
  location: string;
  maxMembers: number;
  currentMembers: number;
  host: {
    id: string;
    name: string;
    university: string;
  };
  createdAt: string;
}
