
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CouponData } from '@/types/analytics';

interface CouponChartProps {
  data: CouponData[];
}

export const CouponChart: React.FC<CouponChartProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>쿠폰 다운로드 vs 사용률</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              tickFormatter={(value) => new Date(value).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })}
            />
            <YAxis />
            <Tooltip 
              labelFormatter={(value) => new Date(value).toLocaleDateString('ko-KR')}
            />
            <Legend />
            <Bar dataKey="downloads" fill="#8884d8" name="다운로드" />
            <Bar dataKey="used" fill="#82ca9d" name="사용" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
