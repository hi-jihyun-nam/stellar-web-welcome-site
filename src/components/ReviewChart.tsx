
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ReviewData } from '@/types/analytics';

interface ReviewChartProps {
  data: ReviewData[];
}

export const ReviewChart: React.FC<ReviewChartProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>리뷰 작성 추이</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              tickFormatter={(value) => new Date(value).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })}
            />
            <YAxis />
            <Tooltip 
              labelFormatter={(value) => new Date(value).toLocaleDateString('ko-KR')}
              formatter={(value) => [value, '리뷰 수']}
            />
            <Area 
              type="monotone" 
              dataKey="reviews" 
              stroke="#82ca9d" 
              fill="#82ca9d"
              fillOpacity={0.6}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
