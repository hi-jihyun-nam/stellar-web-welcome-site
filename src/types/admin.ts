
export interface Shop {
  id: string;
  name: string;
  shopId: string;
}

export interface PhotoContent {
  id: string;
  shopId: string;
  sectionType: 'representative' | 'header1' | 'content1' | 'content2';
  sectionName: string;
  imageUrl: string;
  likeCount: number;
  order: number;
}

export interface CustomerReview {
  id: string;
  shopId: string;
  createdDate: string;
  author: string;
  rating: number;
  content: string;
  language: 'ko' | 'en' | 'ja' | 'zh' | 'vi' | 'th' | 'other';
  photoType?: 'before' | 'after';
  thumbnailUrl?: string;
  likeCount: number;
  isLocked: boolean;
  groupId?: string; // 같은 리뷰의 다른 언어 버전들을 그룹핑
  isTranslated?: boolean; // 번역된 리뷰인지 여부
  originalLanguage?: string; // 원본 언어
}

export interface PhotoSection {
  type: 'representative' | 'header1' | 'content1' | 'content2';
  name: string;
  description: string;
}

export interface ReviewGroup {
  groupId: string;
  reviews: CustomerReview[];
  originalReview: CustomerReview;
  translations: CustomerReview[];
}
