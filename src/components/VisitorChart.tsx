
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { VisitorData } from '@/types/analytics';

interface VisitorChartProps {
  data: VisitorData[];
}

export const VisitorChart: React.FC<VisitorChartProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>방문자 수 추이</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              tickFormatter={(value) => new Date(value).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })}
            />
            <YAxis />
            <Tooltip 
              labelFormatter={(value) => new Date(value).toLocaleDateString('ko-KR')}
              formatter={(value) => [value, '방문자 수']}
            />
            <Line 
              type="monotone" 
              dataKey="visitors" 
              stroke="#8884d8" 
              strokeWidth={2}
              dot={{ fill: '#8884d8' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
