
export interface StudioProfile {
  id: string;
  name: string;
  category: 'beauty' | 'medical' | 'dental';
  location: string;
  status: 'active' | 'inactive';
  avatar: string;
  totalPosts: number;
  totalReviews: number;
  avgRating: number;
  followers: number;
}

export interface ContentPost {
  id: string;
  studioId: string;
  type: 'showcase' | 'before-after' | 'promotion' | 'tutorial';
  title: string;
  description: string;
  images: string[];
  tags: string[];
  likes: number;
  views: number;
  shares: number;
  publishedAt: string;
  isPublished: boolean;
  priority: number;
}

export interface CustomerFeedback {
  id: string;
  studioId: string;
  customerName: string;
  customerAvatar?: string;
  rating: number;
  comment: string;
  beforeImage?: string;
  afterImage?: string;
  treatmentType: string;
  visitDate: string;
  isVerified: boolean;
  likes: number;
  isVisible: boolean;
  responseFromStudio?: string;
}

export interface StudioStats {
  totalViews: number;
  weeklyGrowth: number;
  popularContent: string[];
  topRatedServices: string[];
  customerSatisfaction: number;
  engagementRate: number;
}
