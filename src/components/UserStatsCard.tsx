
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserData } from '@/types/analytics';

interface UserStatsCardProps {
  data: UserData;
}

export const UserStatsCard: React.FC<UserStatsCardProps> = ({ data }) => {
  const domesticPercentage = ((data.domesticUsers / data.totalUsers) * 100).toFixed(1);
  const internationalPercentage = ((data.internationalUsers / data.totalUsers) * 100).toFixed(1);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">전체 가입자</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-2">
          {data.totalUsers.toLocaleString()}
        </div>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">국내</span>
            <span className="font-medium">{data.domesticUsers.toLocaleString()} ({domesticPercentage}%)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">해외</span>
            <span className="font-medium">{data.internationalUsers.toLocaleString()} ({internationalPercentage}%)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
