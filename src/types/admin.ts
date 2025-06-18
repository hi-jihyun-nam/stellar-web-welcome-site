
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
  photoType?: 'before' | 'after';
  thumbnailUrl?: string;
  likeCount: number;
  isLocked: boolean;
}

export interface PhotoSection {
  type: 'representative' | 'header1' | 'content1' | 'content2';
  name: string;
  description: string;
}
