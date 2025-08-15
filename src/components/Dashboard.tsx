
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarDays } from 'lucide-react';
import { format } from 'date-fns';
import { VisitorChart } from './VisitorChart';
import { ReviewChart } from './ReviewChart';
import { CouponChart } from './CouponChart';
import { UserStatsCard } from './UserStatsCard';
import { CountryChart } from './CountryChart';
import { PeriodFilter, AnalyticsData } from '@/types/analytics';

// Mock data
const mockAnalyticsData: AnalyticsData = {
  visitors: [
    { date: '2024-01-01', visitors: 1200 },
    { date: '2024-01-02', visitors: 1350 },
    { date: '2024-01-03', visitors: 1100 },
    { date: '2024-01-04', visitors: 1450 },
    { date: '2024-01-05', visitors: 1600 },
    { date: '2024-01-06', visitors: 1300 },
    { date: '2024-01-07', visitors: 1750 },
  ],
  reviews: [
    { date: '2024-01-01', reviews: 45 },
    { date: '2024-01-02', reviews: 52 },
    { date: '2024-01-03', reviews: 38 },
    { date: '2024-01-04', reviews: 61 },
    { date: '2024-01-05', reviews: 48 },
    { date: '2024-01-06', reviews: 55 },
    { date: '2024-01-07', reviews: 72 },
  ],
  coupons: [
    { date: '2024-01-01', downloads: 150, used: 120 },
    { date: '2024-01-02', downloads: 180, used: 145 },
    { date: '2024-01-03', downloads: 120, used: 95 },
    { date: '2024-01-04', downloads: 200, used: 160 },
    { date: '2024-01-05', downloads: 175, used: 140 },
    { date: '2024-01-06', downloads: 160, used: 128 },
    { date: '2024-01-07', downloads: 220, used: 180 },
  ],
  users: {
    totalUsers: 15420,
    domesticUsers: 12350,
    internationalUsers: 3070,
  },
  countries: [
    { country: '한국', users: 12350, percentage: 80.1 },
    { country: '일본', users: 1540, percentage: 10.0 },
    { country: '중국', users: 770, percentage: 5.0 },
    { country: '미국', users: 460, percentage: 3.0 },
    { country: '기타', users: 300, percentage: 1.9 },
  ],
};

const Dashboard = () => {
  const [periodFilter, setPeriodFilter] = useState<PeriodFilter>('7days');
  const [customDateFrom, setCustomDateFrom] = useState<Date>();
  const [customDateTo, setCustomDateTo] = useState<Date>();

  return (
    <div className="bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">통계 대시보드</h1>
          
          {/* Filters */}
          <div className="flex items-center gap-4">
            <Select value={periodFilter} onValueChange={(value: PeriodFilter) => setPeriodFilter(value)}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="기간 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">최근 7일</SelectItem>
                <SelectItem value="30days">최근 30일</SelectItem>
                <SelectItem value="custom">직접 설정</SelectItem>
              </SelectContent>
            </Select>
            
            {periodFilter === 'custom' && (
              <div className="flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-40">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {customDateFrom ? format(customDateFrom, 'yyyy-MM-dd') : '시작일'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      mode="single"
                      selected={customDateFrom}
                      onSelect={setCustomDateFrom}
                    />
                  </PopoverContent>
                </Popover>
                
                <span>~</span>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-40">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {customDateTo ? format(customDateTo, 'yyyy-MM-dd') : '종료일'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      mode="single"
                      selected={customDateTo}
                      onSelect={setCustomDateTo}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UserStatsCard data={mockAnalyticsData.users} />
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">총 방문자</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockAnalyticsData.visitors.reduce((sum, item) => sum + item.visitors, 0).toLocaleString()}
              </div>
              <p className="text-xs text-gray-500">최근 7일간</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">총 리뷰</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockAnalyticsData.reviews.reduce((sum, item) => sum + item.reviews, 0).toLocaleString()}
              </div>
              <p className="text-xs text-gray-500">최근 7일간</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">쿠폰 사용률</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {(
                  (mockAnalyticsData.coupons.reduce((sum, item) => sum + item.used, 0) /
                  mockAnalyticsData.coupons.reduce((sum, item) => sum + item.downloads, 0)) * 100
                ).toFixed(1)}%
              </div>
              <p className="text-xs text-gray-500">최근 7일간</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <VisitorChart data={mockAnalyticsData.visitors} />
          <ReviewChart data={mockAnalyticsData.reviews} />
          <CouponChart data={mockAnalyticsData.coupons} />
          <CountryChart data={mockAnalyticsData.countries} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
