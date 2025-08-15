
export interface VisitorData {
  date: string;
  visitors: number;
}

export interface ReviewData {
  date: string;
  reviews: number;
}

export interface CouponData {
  date: string;
  downloads: number;
  used: number;
}

export interface UserData {
  totalUsers: number;
  domesticUsers: number;
  internationalUsers: number;
}

export interface CountryData {
  country: string;
  users: number;
  percentage: number;
}

export interface AnalyticsData {
  visitors: VisitorData[];
  reviews: ReviewData[];
  coupons: CouponData[];
  users: UserData;
  countries: CountryData[];
}

export type PeriodFilter = '7days' | '30days' | 'custom';
