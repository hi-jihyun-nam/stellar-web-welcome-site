
export interface ShopPhoto {
  id: string;
  url: string;
  section: 'main' | 'header1' | 'content1' | 'content2';
  sectionName: string;
  likes: number;
  orderIndex: number;
}

export interface ReviewPhoto {
  id: string;
  url: string;
  type: 'before' | 'after';
}

export interface CustomerReview {
  id: string;
  date: string;
  author: string;
  rating: number;
  content: string;
  photoType?: 'before' | 'after';
  photo?: ReviewPhoto;
  likes: number;
  isLocked: boolean;
}

export interface ShopData {
  shopId: string;
  shopName: string;
  photos: ShopPhoto[];
  reviews: CustomerReview[];
}
