
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { CountryData } from '@/types/analytics';

interface CountryChartProps {
  data: CountryData[];
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#00ff7f'];

export const CountryChart: React.FC<CountryChartProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>국가별 사용자 분포</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ country, percentage }) => `${country} (${percentage}%)`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="users"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [value, '사용자 수']} />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 space-y-2">
          {data.map((item, index) => (
            <div key={item.country} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span>{item.country}</span>
              </div>
              <span className="font-medium">{item.users.toLocaleString()}명</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
