
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface ShopSearchSectionProps {
  onSearch: (shopName: string) => void;
}

export const ShopSearchSection: React.FC<ShopSearchSectionProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              31호
            </div>
            <div className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
              사진 관리 / 리뷰 관리
            </div>
            <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 cursor-pointer transition-colors">
              저장
            </div>
            <div className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 cursor-pointer transition-colors">
              이전으로 되돌리기
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Input
            placeholder="샵 이름 검색 Ex. 카리오앤이브 잠실점 또는 샵 코드(31)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 h-12 text-base"
          />
          <Button onClick={handleSearch} size="lg" className="h-12">
            <Search className="h-5 w-5 mr-2" />
            검색
          </Button>
        </div>
        
        <div className="mt-3 text-sm text-blue-700 font-medium">
          💡 검색하고자 하는 샵의 이름 또는 샵의 코드(shop_id)를 입력하세요
        </div>
      </CardContent>
    </Card>
  );
};
